const key = process.env.NEXT_PUBLIC_API_Public_Key;

export default async function getBook() {
  const result = await fetch(
    `https://redrosebd.click/api/v2/app/book/chapter/index?book_slug=boook-2&public_key=${key}`
  );//check testing

  return result.json();
}
