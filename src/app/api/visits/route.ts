// src/app/api/visits/route.ts
import { NextResponse } from 'next/server';
// ✅ Ruta relativa correcta desde src/app/api/visits/route.ts
import { createClient } from '../../../../lib/supabaseClient';

export async function GET() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('visits')
    .select('count')
    .eq('slug', 'home')
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ count: data.count });
}

export async function POST() {
  const supabase = createClient();

  const { error } = await supabase.rpc('increment_visit', { page_slug: 'home' });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Obtener el valor actualizado después del incremento
  const { data, error: selectError } = await supabase
    .from('visits')
    .select('count')
    .eq('slug', 'home')
    .single();

  if (selectError) return NextResponse.json({ error: selectError.message }, { status: 500 });

  return NextResponse.json({ count: data.count });
}

