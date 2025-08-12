import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <Navigation />

      {/* HERO: teal background; extra top padding to clear fixed nav */}
      <section className="bg-[#77b8b1] text-white py-20 pt-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">Privacy Policy</h1>
        </div>
      </section>

      {/* NAVY BAND BEHIND THE MAIN CARD */}
      <div className="bg-[#2d3c6f]">
        {/* WHITE CARD that overlaps the hero using negative margin */}
        <div className="relative -mt-12 mx-4 sm:mx-8 lg:mx-12">
          <div className="bg-white rounded-t-lg shadow-2xl">
            {/* main content area */}
            <section className="py-16 px-8 lg:px-16">
              <div className="max-w-4xl mx-auto">
                <p className="font-neutra text-gray-500 text-sm mb-8">
                  Last updated: August 29, 2022
                </p>
                
                <div className="prose prose-gray max-w-none font-neutra">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
                  <p className="mb-6">
                    Elemental Prep LLC and EC Enterprises LLC ("us", "we", or "our") operate the Elemental Prep website (the "Service").
                  </p>
                  <p className="mb-6">
                    This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.
                  </p>
                  <p className="mb-6">
                    We will not use or share your information with anyone except as described in this Privacy Policy.
                  </p>
                  <p className="mb-8">
                    We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at https://elementalprep.com
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Collection and Use</h2>
                  <p className="mb-4">
                    While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information ("Personal Information") may include, but is not limited to:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Email address</li>
                  </ul>
                  <p className="mb-4">
                    For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
                  </p>
                  <p className="mb-6">
                    If you have an account on this site, you can request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Log Data</h2>
                  <p className="mb-6">
                    We collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies</h2>
                  <p className="mb-4">
                    Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
                  </p>
                  <p className="mb-6">
                    We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Embedded Content From Other Websites</h2>
                  <p className="mb-4">
                    Our Service may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                  </p>
                  <p className="mb-6">
                    These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Links To Other Sites</h2>
                  <p className="mb-4">
                    Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
                  </p>
                  <p className="mb-6">
                    We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Security</h2>
                  <p className="mb-6">
                    The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
                  <p className="mb-4">
                    Our Service does not address anyone under the age of 18 ("Children").
                  </p>
                  <p className="mb-6">
                    We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Compliance With Laws</h2>
                  <p className="mb-6">
                    We will disclose your Personal Information where required to do so by law or subpoena.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes To This Privacy Policy</h2>
                  <p className="mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                  </p>
                  <p className="mb-6">
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                  <p className="mb-2">If you have any questions about this Privacy Policy, please contact us.</p>
                  <p className="mb-1">Elemental Prep LLC</p>
                  <p className="mb-1">539 W. Commerce St #6867</p>
                  <p>Dallas, TX 75208</p>
                </div>
              </div>
            </section>
            {/* FOOTER inside a dark gray strip */}
            <div className="bg-[#323437]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;