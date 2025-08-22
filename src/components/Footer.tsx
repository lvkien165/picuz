import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="/privacy.html" className="hover:text-gray-300">Privacy Policy</Link>
          <Link href="/about" className="hover:text-gray-300">About Us</Link>
          <Link href="mailto:Picuz@gmail.com" className="hover:text-gray-300">Contact</Link>
        </div>
        <p>©{new Date().getFullYear()} Picuz. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 