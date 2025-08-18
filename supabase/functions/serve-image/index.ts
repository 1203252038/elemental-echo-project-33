import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Image serve function called, method:', req.method);
    
    // Create Supabase client with service role for storage access
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    console.log('Supabase URL:', supabaseUrl);
    console.log('Service role key present:', !!supabaseKey);
    
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    // Get the image filename from request body
    const body = await req.json();
    const filename = body?.filename;
    
    console.log('Requested image filename:', filename);

    if (!filename) {
      console.log('No filename provided');
      return new Response(
        JSON.stringify({ error: 'No filename specified' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Create a signed URL for the image file
    console.log('Creating signed URL for image file...');
    const { data: signedUrlData, error: signedUrlError } = await supabase
      .storage
      .from('pdfs')
      .createSignedUrl(filename, 3600); // 1 hour expiry

    if (signedUrlError || !signedUrlData) {
      console.error('Error creating signed URL:', signedUrlError);
      return new Response(
        JSON.stringify({ 
          error: 'Image not found or access denied', 
          details: signedUrlError?.message,
          filename: filename 
        }),
        { 
          status: 404, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Signed URL created successfully for image');
    
    return new Response(
      JSON.stringify({ 
        success: true,
        filename: filename,
        signedUrl: signedUrlData.signedUrl
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in serve-image function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});