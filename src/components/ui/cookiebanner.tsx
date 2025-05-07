import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';

const CookieBanner: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'consent' | 'details' | 'about'>('consent');
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setIsVisible(true);
  }, []);

  const handleConsent = (type: 'necessary' | 'selection' | 'all') => {
    let consentData = { ...preferences };

    if (type === 'necessary') {
      consentData = { necessary: true, preferences: false, statistics: false, marketing: false };
    } else if (type === 'all') {
      consentData = { necessary: true, preferences: true, statistics: true, marketing: true };
    }

    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleToggle = (key: keyof typeof preferences) => {
    if (key === 'necessary') return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const tabContent = {
    consent: (
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
        We use cookies to personalise content and ads, to provide social media features and to
        analyse our traffic. We also share information about your use of our site with our social
        media, advertising and analytics partners who may combine it with other information that
        you’ve provided to them or that they’ve collected from your use of their services.
      </p>
    ),
    details: (
      <div className="text-gray-700 leading-relaxed space-y-2 text-sm sm:text-base">
        <p><strong>Necessary Cookies:</strong> Required for the basic functioning of the website (e.g., page navigation, secure login).</p>
        <p><strong>Preferences Cookies:</strong> Remember your preferences such as language, region, or font size for a more personalized experience.</p>
        <p><strong>Statistics Cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics) so we can improve performance.</p>
        <p><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant ads and measure campaign effectiveness.</p>
      </div>
    ),
    about: (
      <div className="text-gray-700 leading-relaxed space-y-2 text-sm sm:text-base">
        <p>
          This website complies with data protection regulations including the 
          <strong> General Data Protection Regulation (GDPR)</strong> and other relevant data privacy laws.
        </p>
        <p>
          We ensure that cookies are only stored with your explicit consent, and you can change or withdraw your consent at any time via this banner.
        </p>
        <p>
          For more information, please see our{' '}
          <Link to="/resources/privacy-policy" className="text-orange-600 underline">
            Privacy policy
          </Link>{' '}and{' '}
          <Link to="/resources/cookie-policy" className="text-orange-600 underline">
            Cookie policy
          </Link>.
        </p>
      </div>
    ),
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 pointer-events-auto" />

      {/* Centered Cookie Box */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white w-full max-w-3xl rounded-lg shadow-xl p-5 sm:p-8 text-sm sm:text-base">
          {/* Tabs */}
          <div className="mb-4 border-b flex overflow-x-auto space-x-6 text-sm sm:text-base">
            {['consent', 'details', 'about'].map((tab) => (
              <button
                key={tab}
                className={`pb-2 font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab
                    ? 'border-b-2 border-orange-600 text-orange-600'
                    : 'text-gray-500 hover:text-orange-600'
                }`}
                onClick={() => setActiveTab(tab as typeof activeTab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mb-6">{tabContent[activeTab]}</div>

          {/* Toggle Switches */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center mb-6">
            {Object.entries(preferences).map(([key, value]) => (
              <div key={key}>
                <label className="block mb-2 text-sm font-medium capitalize">{key}</label>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleToggle(key as keyof typeof preferences)}
                  disabled={key === 'necessary'}
                  className="w-5 h-5"
                />
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={() => handleConsent('necessary')}
              className="px-4 py-2 border border-gray-400 rounded text-sm"
            >
              Use necessary cookies only
            </button>
            <button
              onClick={() => handleConsent('selection')}
              className="px-4 py-2 border border-orange-600 text-orange-600 rounded text-sm"
            >
              Allow selection
            </button>
            <button
              onClick={() => handleConsent('all')}
              className="px-4 py-2 bg-orange-600 text-white rounded text-sm"
            >
              Allow all cookies
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
