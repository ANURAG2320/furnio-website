// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-10 px-6 md:px-20">
      <div className="max-w-screen-xl  mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Brand + Address */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Funiro.</h2>
          <p className="text-sm mt-10">
            400 University Drive Suite 200
            <br />
            Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-medium  mb-4">Links</h3>
          <ul className="space-y-2 text-sm  mt-10">
            <li className="hover:text-blue-500 mt-10 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 mt-10 cursor-pointer">Shop</li>
            <li className="hover:text-blue-500  mt-10 cursor-pointer">About</li>
            <li className="hover:text-blue-500 mt-10 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-medium mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-500 mt-10 cursor-pointer">
              Payment Options
            </li>
            <li className="hover:text-blue-500 mt-10 cursor-pointer">Returns</li>
            <li className="hover:text-blue-500 mt-10 cursor-pointer">
              Privacy Policies
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-medium mb-4">Newsletter</h3>
          <p className="text-sm mt-10 mb-2">Subscribe to get latest updates</p>

          <div className="flex items-center w-full space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md"
            />
            <button className="px-4 py-2 text-sm underline text-black rounded-md whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
