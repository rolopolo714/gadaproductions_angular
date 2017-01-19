export class Video{
  resource_key: string;
  name: string;
  uri: string;
  embed: embed;
}

interface embed{
  html:string;
}
