import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function salvar(leadName, leadEmail, leadWhatsapp) {
  const { data, error } = await supabase
    .from("lead")
    .insert([{ name: leadName, email: leadEmail, number: leadWhatsapp }]);

  if (error) console.error(error);
  else console.log(data);
}
