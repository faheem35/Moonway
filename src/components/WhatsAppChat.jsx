import { useState } from 'react';
import { companyData } from '../data';

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '971501124309'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20${companyData.name}%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat messages */}
      {isOpen && (
        <div className="mb-4 bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-4 w-72 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800 dark:text-white">Message us!</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Have a question? We're here to help! Message us on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-center"
          >
            Open WhatsApp
          </a>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-bounce cursor-pointer"
        title="Chat with us on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.36 2.124 7.582L2.523 22l2.396-.727A9.911 9.911 0 0012 22c5.446 0 10.107-4.413 10.142-9.852.007-2.634-.731-5.125-2.051-7.287-.73-1.094-1.767-2.123-3.055-3.018-1.289-.895-2.79-1.432-4.365-1.503zm0-2.103c2.979.039 5.842 1.159 8.02 3.148 2.178 1.99 3.374 4.62 3.367 7.38-.063 6.15-5.095 11.127-11.269 11.127-1.855 0-3.659-.425-5.326-1.227l-.893 2.717 2.838-.915C6.35 20.627 9.126 21.36 12 21.36c6.234 0 11.543-5.209 11.605-11.566.018-3.096-1.211-6.005-3.456-8.196-2.245-2.192-5.241-3.404-8.394-3.431-2.79-.023-5.484.742-7.833 2.207z"/>
        </svg>
      </button>
    </div>
  );
}
