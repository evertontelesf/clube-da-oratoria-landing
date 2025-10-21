import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function salvar(leadName, leadEmail, leadWhatsapp) {
  const { data, error } = await supabase
    .from("lead")
    .insert([{ name: leadName, email: leadEmail, number: leadWhatsapp }]);

  if (error) console.error(error);
  else console.log(data);
}
