interface Category {
  id: string;
  titleUk: string;
  titleEn: string;
  slug: string;
}

interface CategoryResponse {
  message: string;
  data: Category[];
}
