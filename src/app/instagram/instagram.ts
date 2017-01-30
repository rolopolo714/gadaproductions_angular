export class Instagram{
  id: number;
  link: string;
  caption: caption;
  images: images;
}

interface caption{
  text:string;
}

interface images{
  standard: standard;
  thumbnail: thumbnail;
}

interface standard{
  url:string
}

interface thumbnail{
  url:string
}
