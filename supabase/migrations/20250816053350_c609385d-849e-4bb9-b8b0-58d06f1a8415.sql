-- Create a storage bucket for PDFs
INSERT INTO storage.buckets 
  (id, name, public)
VALUES 
  ('pdfs', 'pdfs', false);

-- Create RLS policies for PDF bucket
CREATE POLICY "Authenticated users can view PDFs" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'pdfs' AND auth.role() = 'authenticated');

CREATE POLICY "Service role can upload PDFs" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'pdfs' AND auth.role() = 'service_role');