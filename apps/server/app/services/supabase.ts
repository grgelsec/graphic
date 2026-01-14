import { createClient } from "@supabase/supabase-js";
import type { AuthResponse } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const signUp = async (
  userEmail: string,
  userPassword: string
): Promise<AuthResponse> => {
  const newUser: AuthResponse = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
  });

  return newUser;
};
