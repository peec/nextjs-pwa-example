import Link from "next/link";
import Image from "next/image";
import image from "../../public/install.png"

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>You can install this PWA by clicking install icon in your browser </p>
      <p>
        <Image src={image} alt="install pwa"
               sizes="100vw"
               style={{
                 width: '100%',
                 height: 'auto',
               }}/>
      </p>
    </div>
  );
}
