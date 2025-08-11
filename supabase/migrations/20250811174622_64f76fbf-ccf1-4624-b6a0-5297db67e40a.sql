-- Remove the insecure policy that allows everyone to view all profiles
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

-- Create a secure policy that only allows users to view their own profile
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Optional: Create a policy to allow users to view basic public info (username only) if needed
-- Uncomment the following lines if the app needs to display usernames publicly
-- CREATE POLICY "Public can view usernames only" 
-- ON public.profiles 
-- FOR SELECT 
-- USING (true)
-- WITH CHECK (false);