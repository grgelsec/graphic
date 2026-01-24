import { createClient } from "@supabase/supabase-js";
import type { AuthError, AuthResponse } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!,
);

export const signUp = async (userEmail: string, userPassword: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
  });

  return { data, error };
};

export const signIn = async (userEmail: string, userPassword: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  });

  console.log({ data, error });

  return { data, error };
};
