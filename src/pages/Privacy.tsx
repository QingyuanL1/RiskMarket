import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              返回
            </button>
          </div>
          
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
          <p className="mb-6 text-gray-500">Policy last updated on 04/04/2025</p>

          <div className="prose prose-lg max-w-none">
            <p>
              This Privacy Policy applies to personal information collected by Risk Marker, LLC and any affiliated or subsidiary companies ("Risk Marker", "we" or "us"), offline or online, including, but not limited to, through all of our website or apps that post a link to this Privacy Policy (collectively, "the Services"). For the purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, job applicant, representative of a company with whom we do business, or another individual whose information we have collected pursuant to this Privacy Policy.
            </p>
            <p>
              This Privacy Policy explains the types of personal information we collect, how we use and process personal information, the legal basis for processing, and to whom we disclose personal information. We also tell you how you can reach us to update your contact information or get answers to questions you may have about our privacy practices. Please read this Privacy Policy carefully. By continuing to interact with our Services or providing personal information to us after having an opportunity to review this Privacy Policy, you are agreeing to the practices described in this Privacy Policy.
            </p>
            <p>
              Risk Marker is located in the United States. Information collected on our website and applications is stored in the United States; therefore, your information may become subject to U.S. law. By using the Services, you consent to the transfer of your data overseas and across borders, and from your country or jurisdiction to other countries or jurisdictions around the world. The laws governing data in your home country may differ from those in the countries to which data is transferred.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">1. UPDATES TO OUR PRIVACY POLICY</h2>
            <p>
              The Privacy Policy may be updated periodically, in which case we will update the "Policy last updated on" date at the top of this Privacy Policy. If we make material changes to this Privacy Policy, we will use reasonable efforts to notify you (such as by emailing you at the last email address you provided us, by posting notice of such changes on the Services, or by other means consistent with applicable law) and will take additional steps as required by applicable law. If you do not agree to any updates to this Privacy Policy, please do not continue using or accessing the Services.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. PERSONAL INFORMATION WE COLLECT</h2>
            <p>
              When we use the terms "personal information" or "personal data" in this Privacy Policy, we are referring to information that identifies, relates to, describes, or is reasonably capable of being associated, directly or indirectly, with an individual. It does not include information that has been modified in a substantial way so that it no longer can reasonably identify or be linked to an individual, which we may use for any purpose. To the extent we possess or process any deidentified information, we will maintain and use such information in deidentified/anonymized form and not attempt to re-identify the information, except solely for the purpose of determining whether our deidentification/anonymization process satisfies legal requirements.
            </p>
            <p>When you use the Services, we collect the following categories of personal information from the following sources:</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">a. Information You Provide</h3>
            <p>
              When Using the Services. We collect certain personal information directly from you, including your name, address, telephone number, email address, site password, or financial information when you visit the Services, create an account with us, or register a product or purchase with the Services. Some of our Services also offer you the option to interact with, capture, or save information through the Services.
            </p>
            <p>
              Precise Geolocation Information. We may offer products and services that require us to collect your precise geolocation. In such instances, you may be asked to allow Risk Marker to collect your precise geolocation, with your knowledge and consent, to provide you with that product or service. If you choose not to provide us with your precise geolocation information, these products and services will not function properly, and we will not be able to provide them to you.
            </p>
            <p>
              We may also use this precise geolocation information for analytics purposes and will share your precise geolocation information with certain third parties, including, but not limited to, dealers and parties who provide targeted advertising and analytics services.
            </p>
            <p>
              Careers. Our Services may include a link to Risk Marker Careers so that you may search for open Risk Marker positions and apply for positions by submitting your resume and other personal information, such as your name, contact information, education, and job history. We use the information you submit to evaluate your interest in employment and to contact you regarding possible employment.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">b. Online Sales</h3>
            <p>
              Risk Marker Services. Our services are offered for sale by Risk Marker directly from the Services. If you transact with Risk Marker via our Services, your information, including payment card information, will be collected to process orders. Your information will be collected either by Risk Marker or by an authorized third-party payment processor.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">c. Information We Collect Using Cookies and Other Technologies</h3>
            <p>
              We collect certain information by automated means when you visit our Services, such as how many users visited our websites and the pages accessed. By collecting this information, we learn how to best tailor our Services to our visitors. We collect this information through various means such as "cookies" and "web beacons."
            </p>
            <p>
              Cookies. Like many companies, we use "cookies" on some of our Services. Cookies are pieces of code placed on your devices when you visit certain websites. We use cookies to tell us, for example, whether you have visited us before or if you are a new visitor and to help us identify features of the Services in which you may have the greatest interest. Cookies may enhance your online experience by saving your preferences while you are visiting a particular website.
            </p>
            <p>
              Most web browsers will tell you how to stop accepting new cookies, how to be notified when you receive a new cookie, and how to disable existing cookies. Please note, however, that without cookies you may not be able to take full advantage of all the features and functionality of the Services.
            </p>
            <p>
              Web Beacons. As described in our separate Cookie Policy, certain pages on our website contain "web beacons" (also known as Internet tags, pixel tags and clear GIFs). These web beacons allow third parties to obtain information such as the IP address of the computer that downloaded the page on which the beacon appears; the URL of the page on which the beacon appears; the time the page containing the beacon was viewed; the type of browser used to view the page; and the information in cookies set by the third party.
            </p>
            <p>
              IP Addresses. An IP address is a unique identifier that certain electronic devices use to identify and communicate with each other on the Internet. When you visit our website and/or app, we view the IP address of the device you use to connect to the Internet. We then use this information to determine the general physical location of the device and understand the general locations of our website visitors. We also use this information to enhance our website and/or app.
            </p>
            <p>
              Our website recognizes the Global Privacy Control (GPC) signal, which enables you to opt-out of certain uses or disclosures of your information. If you notify us of your preference through GPC, we will honor your request only for the browser or device that sends the GPC signal. When you log into your account, the opt-out will extent to your account as well. If you do not have an account or are not logged into your account, your request to opt out through the GPC will not apply to any account information. To learn more about "do not track" signals, you can visit http://www.allaboutdnt.com/. To learn more about Global Privacy Control, you can visit https://globalprivacycontrol.org/.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">d. Information Collected from Other Sources</h3>
            <p>
              We may collect personal information about you from outside sources, including information that we collect directly from third parties and information from third parties that you choose to share with us. For example, we may collect analytics data from providers such as Google Analytics, Facebook Pixel and other tracking cookies, information we receive from career websites which we use to process your application for employment, information we receive from consumer marketing databases or other data enrichment companies, and information we receive when you choose to link any social media platforms to your account.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">3. PURPOSES AND LEGAL BASIS FOR PROCESSING PERSONAL INFORMATION</h2>
            <p>The information we collect is processed for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To create and maintain your account and serve the function of the Services;</li>
              <li>To manage everyday business needs, such as administration and improvement of the Services;</li>
              <li>To analyze the Services' performance and functioning;</li>
              <li>To prevent fraud; enforce our Terms of Use; to comply with all applicable laws and corporate reporting obligations; and to enforce our Agreements;</li>
              <li>To analyze how you use the Services and to perform other market research;</li>
              <li>To provide information and communicate with you about our products and services;</li>
              <li>To provide you with advertisements based on your interests;</li>
              <li>To facilitate your purchase and to provide you with information about financial options for the purchase of our products;</li>
              <li>To facilitate your interaction through our Services with other consumers, including through social networking;</li>
              <li>To communicate with you and to send you further notices, promotions, solicitations, brochures, or other marketing materials regarding our Services, our products, and the services of our businesses, affiliates, business partners, or authorized dealers; and</li>
              <li>To process your application for employment and to evaluate your candidacy.</li>
            </ul>
            <p>
              In addition to the specific uses above, we may use any of the above information to provide you with the Services and to maintain our business relationship, including by enhancing the safety and security of our Services (e.g., troubleshooting, data analysis, testing, system maintenance, and reporting), providing customer support, sending service and other non-marketing communications, monitoring and analyzing trends, conducting internal research and development, complying with applicable legal obligations, enforcing any applicable terms of service, and protecting the Services, our rights, and the rights of our employees, users or other individuals.
            </p>
            <p>Risk Marker processes this information where we have a legal basis to do so. The legal basis that we will rely on will be one of the following:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>You have consented to our processing your personal information;</li>
              <li>The processing is necessary to perform a contract with you or to fulfill a request you have made;</li>
              <li>The processing is necessary to comply with a legal obligation that applies to Risk Marker under United States, European Union, Member State, or other applicable law; or</li>
              <li>The processing is necessary for purposes that are in Risk Marker's legitimate interests as a retailer in order to protect our business, grow our business, and better understand our customers.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">4. PERSONAL INFORMATION WE DISCLOSE</h2>
            <p>
              We disclose the information you provide with affiliates, subsidiaries, sales representatives, or authorized dealers in your area, other business partners, and third-party marketing partners. They may use your information to communicate with you about their products and services, and to send you further notices, promotions, solicitations, or brochures, and other marketing materials regarding our website, our products, and the services they provide. With your knowledge and consent, we will also share your precise geolocation with third parties, including, but not limited to, dealers and parties who provide targeted advertising and analytics services.
            </p>
            <p>
              We also disclose your information with third parties who perform services and functions on our behalf to support our interactions with you including, for example, providing our products and services, cloud storage, systems administration, analytics, payment processing, sales partners, automation intelligence, cookie tracking, or communicating with you. These third parties are not authorized by us to use or disclose the information except as necessary to perform services on our behalf or comply with legal requirements.
            </p>
            <p>In addition, we may also disclose information about you:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To law enforcement authorities or other government officials;</li>
              <li>When we believe disclosure is necessary or appropriate to prevent physical harm or financial loss or in connection with an investigation of suspected or actual illegal activity;</li>
              <li>If this is necessary to protect the vital interests of a person;</li>
              <li>To enforce our Terms of Use;</li>
              <li>To protect our property, services and legal rights;</li>
              <li>To prevent fraud against Risk Marker, our Services, our affiliates, business partners, or authorized dealers;</li>
              <li>To support auditing, compliance, and corporate governance functions; or</li>
              <li>To comply with applicable laws.</li>
            </ul>
            <p>
              We reserve the right to disclose and transfer all information related to our Services, including personal data, to a subsequent owner, co-owner or operator of one or more of the Services or in connection with or anticipation of a corporate merger, consolidation, or restructuring, the sale of a portion of or substantially all of our stock and/or assets, or other corporate change, including, without limitation, during the course of any due diligence process or in the context of a bankruptcy proceeding.
            </p>
            <p>
              Risk Marker will not reveal the account history of a user, except for reasons listed under Section 4, Subsections a, b, c, d, e, f, g, or h, of this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">5. LINKS TO OTHER WEBSITES</h2>
            <p>
              Our services may provide links to other websites for your convenience and information. These websites may operate independently from our Services. Linked websites may have their own privacy notices or policies, which we strongly suggest you review if you visit any linked websites. To the extent any linked websites you visit are not part of this website, we are not responsible for their content, any use of the websites, or the privacy practices of any of those websites. Our inclusion of such links does not, by itself, imply any endorsement of the content on such platforms or of their owners or operators.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">6. HOW WE PROTECT PERSONAL INFORMATION</h2>
            <p>
              We maintain reasonable security procedures and practices appropriate to the nature of the personal information we collect designed to protect against loss, misuse or unauthorized access, disclosure, alteration or destruction of the information you provide when visiting or using the Services. Despite our efforts to safeguard your personal information, we cannot guarantee it will be completely secure from unauthorized access, disclosure, use, or alteration. In particular, there is always an inherent risk in the electronic transmission and storage of information. To protect the security of your user name and password, we recommend that you use a complex password that is different from passwords you use for other activities, keep all your passwords in a safe place, and do not share your passwords with others. Always remember to logout after your session ends so that other people cannot access your account information.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">7. CHILDREN'S PRIVACY</h2>
            <p>
              Our Services are not directed at children under the age of 18. You specifically recognize and consent that you are 18 years of age or older before using the Services. If we obtain actual knowledge that any information we collect has been provided by a child under the age of 18, we will make commercially reasonable efforts to delete that information. If you believe you or your child's information has been captured while under 18 years of age, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">8. RETENTION OF PERSONAL INFORMATION</h2>
            <p>
              Risk Marker retains all personal information for the duration of the relevant business relationship or, where required, in accordance with its information management policies and schedules. When determining the length of time to retain your information, we consider various criteria, including whether we need the information to continue to provide you the Services, resolve a dispute, enforce our contractual agreements, prevent harm, promote safety, security and integrity, or protect ourselves, including our rights, property or products.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">9. CALIFORNIA RESIDENTS</h2>
            <p>
              This section of our Privacy Policy supplements our Privacy Policy to provide additional information under the California Consumer Privacy Act, as amended (the "CCPA"), and other California consumer protection laws. This section applies only to individuals who reside in the State of California ("residents"). For purposes of this section, references to "personal information" shall include "sensitive personal information," as these terms are defined under CCPA.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">A. Processing of Personal Information</h3>
            <p>
              The personal information we collect about California residents, the sources we collect personal information from, and the business or commercial purposes for which it will be used is described in these sections of our Privacy Policy: Personal Information We Collect and Purposes and Legal Basis for Processing Personal Information.
            </p>
            <p>
              The chart below lists the categories of personal information, and sensitive personal information (denoted by a *), we may have obtained and disclosed about residents during the past twelve (12) months, depending on the nature and scope of our interactions with you.
            </p>

            <div className="overflow-x-auto mt-4 mb-8">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">CATEGORIES OF PERSONAL INFORMATION COLLECTED IN the PAST 12 MONTHS</th>
                    <th className="border border-gray-300 px-4 py-2">CATEGORIES OF RECIPIENTS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Identifiers such as name, postal address, and IP address</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sales representatives or authorized dealers<br />
                      Business partners<br />
                      Third party marketing partners<br />
                      Service providers
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Personal information categories listed in the California Customer Records statute such as name, address, and telephone number</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sales representatives or authorized dealers<br />
                      Business partners<br />
                      Third party marketing partners<br />
                      Service providers
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Commercial information such as records of products or services purchased</td>
                    <td className="border border-gray-300 px-4 py-2">Service providers</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Internet and Other Electronic Network Activity</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sales representatives or authorized dealers<br />
                      Business partners<br />
                      Third party marketing partners<br />
                      Service providers
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Geolocation Data such as IP address</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Third party marketing partners<br />
                      Service providers
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Visual information such as photographs and Video</td>
                    <td className="border border-gray-300 px-4 py-2">Service providers</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Professional or employment information such as title of profession, employer, and professional background</td>
                    <td className="border border-gray-300 px-4 py-2">Service providers</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Inferences drawn from other personal information, such as a profile reflecting your interests</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sales representatives or authorized dealers<br />
                      Business partners<br />
                      Third party marketing partners<br />
                      Service providers
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Government Identifiers* such as Social Security, driver's license, state identification card, or passport number</td>
                    <td className="border border-gray-300 px-4 py-2">Service providers</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Account access credentials* such as account log-in</td>
                    <td className="border border-gray-300 px-4 py-2">Service providers</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Precise geolocation data*</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Third party marketing partners<br />
                      Service providers
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Personal information concerning your health* such as a metabolic assessment</td>
                    <td className="border border-gray-300 px-4 py-2">Service providers</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Characteristics of protected classifications under California or federal law such as sex and age</td>
                    <td className="border border-gray-300 px-4 py-2">Service providers</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Customer or Household Profile Information</td>
                    <td className="border border-gray-300 px-4 py-2">Profile of customer preferences, needs and interests; geographic location; budget; family composition and age ranges.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>The criteria we use to determine how long to retain your personal information is described in the section above, Retention of Personal Information.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">B. Selling / Sharing of Personal Information</h3>
            <p>
              We do not have actual knowledge that we "sell" or "share" (as those terms are defined under the CCPA and used throughout this section) personal information of California residents under 16 years of age. While we do not sell your personal information for money in the traditional sense, our disclosure of your personal information to certain third parties may be considered a "sale" or "share" as those terms are defined by the CCPA. In the preceding 12 months, we have sold and/or shared the following categories of personal information about California residents:
            </p>

            <div className="overflow-x-auto mt-4 mb-8">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">CATEGORIES OF PERSONAL INFORMATION</th>
                    <th className="border border-gray-300 px-4 py-2">CATEGORIES OF RECIPIENTS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Identifiers such as name, postal address, and IP address</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sales representatives or authorized dealers<br />
                      Business partners<br />
                      Third party marketing partners
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Personal information categories listed in the California Customer Records statute such as name, address, and telephone number</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sales representatives or authorized dealers<br />
                      Business partners<br />
                      Third party marketing partners
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Internet and other electronic network activity</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sales representatives or authorized dealers<br />
                      Business partners<br />
                      Third party marketing partners
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Geolocation data such as IP address</td>
                    <td className="border border-gray-300 px-4 py-2">Third party marketing partners</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Inferences drawn from other personal information, such as a profile reflecting your interests</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sales representatives or authorized dealers<br />
                      Business partners<br />
                      Third party marketing partners
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Precise geolocation data* (with your consent)</td>
                    <td className="border border-gray-300 px-4 py-2">Third party marketing partners</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">C. Your California Privacy Rights</h3>
            <p>
              As a California resident, you may have the rights listed below in relation to personal information that we have collected about you. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.
            </p>
            <p><strong>Right to Know:</strong> California residents have the right to request the following information regarding personal information that we have collected about you.</p>
            <ol className="list-decimal pl-6 mb-4">
              <li>The categories of personal information we collected, disclosed for a business purpose, sold, or shared.</li>
              <li>The categories of sources from which the personal information is collected.</li>
              <li>The business or commercial purpose for collecting, selling, and sharing personal information.</li>
              <li>For personal information disclosed to a third party for a business purpose, or sold or shared; categories of personal information and categories of third parties.</li>
              <li>The specific pieces of personal information collected about you (except for very sensitive personally identifiable information, which we will describe, not transmit).</li>
            </ol>
            <p>
              <strong>Right to Delete.</strong> California residents have the right to request that we delete personal information about you.
            </p>
            <p>
              <strong>Right to Correct:</strong> California residents have the right to request that we correct inaccurate personal information we maintain about you.
            </p>
            <p>
              <strong>Right to Opt out of Sale or Sharing:</strong> California residents have a right to direct us not to sell or share your personal information. To exercise this right, please contact us immediately.
            </p>
            <p>
              If you are a California resident, California Civil Code Section 1798.83 permits you to request information regarding the disclosure of your personal information by us to third parties for the third-parties' direct marketing purposes within the immediately preceding calendar year. We will provide you with a list of the categories of personal information disclosed and a list of the names and addresses of the third parties. To make such a request, please contact us immediately.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">D. Designating an Authorized Agent</h3>
            <p>
              California residents may designate an authorized agent to act on their behalf to submit a rights request. An authorized agent must also submit to Risk Marker written proof of their authorization to act on the resident's behalf.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">E. How to Make a Verifiable California Consumer Report</h3>
            <p>
              California residents may submit a request to exercise any of their rights described above, as noted under the section titled: "How to Contact Us." We may need to collect information from you to verify your identity, such as your email address, government issued ID or date of birth, before providing a substantive response to the request.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">F. How We Will Respond to a California Consumer Report</h3>
            <p>
              We will confirm receipt of your Right to Know or Right to Delete request within ten (10) days and may request additional information necessary to verify that you are permitted to make the request. We will respond to any verifiable consumer request within forty-five (45) days of receiving it, subject to delays and exclusions permitted by law. If we require more time to respond, we will let you know the reason why and the extension period in writing. If you have a password-protected online account with us, we will respond via that account. If you do not have an online account, we will use the email address or U.S. Postal address you provided to us when making the request.
            </p>
            <p>
              For a Right to Know request, our response will cover the twelve (12) month period preceding our receipt of the request. If we cannot comply with all or part of your request, we will explain the reasons why. For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information readily from one entity to another entity.
            </p>
            <p>
              We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">G. Protection from Discrimination for Exercising California Consumer Rights</h3>
            <p>
              California residents have a right not to receive discriminatory treatment by the business for exercising the privacy rights conferred by the CCPA. As such, we will not discriminate against a California resident for exercising any of the rights described in this section. This means that except as legally permitted we will not:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Deny you goods or services</li>
              <li>Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.</li>
              <li>Provide you a different level or quality of goods or services</li>
              <li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
              <li>Financial Incentive Programs</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">10. RESIDENTS OF OTHER JURISDICTIONS</h2>

            <h3 className="text-xl font-semibold mt-6 mb-2">a. Your Privacy Rights</h3>
            <p>
              If you are are a resident of a jurisdiction outside California, depending where you live, you may have some or all of the rights listed below in relation to information that we have collected about you. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law, including in the event you reside in a state that does not currently grant you these rights.
            </p>
            <p>
              <strong>Right to Access:</strong> You may have a right to request that we confirm whether we process information about you and give you access to that information in a portable and, to the extent technically feasible, readily usable format that allows you to transmit the information to another business without impediment.
            </p>
            <p>
              <strong>Right to Delete:</strong> You may have a right to request that we delete information we maintain about you.
            </p>
            <p>
              <strong>Right to Correct:</strong> You may have a right to request that we correct inaccurate information we maintain about you.
            </p>
            <p>
              <strong>Right to Opt-out of Targeted Advertising or Selling:</strong> You may have a right to opt-out of the processing of your information for the purposes of targeted advertising and/or the sale of your information (as all such terms and concepts are defined under applicable law). For information on how we process opt-out preference signals, see the section above, Information We Collect Using Cookies and Other Technologies.
            </p>
            <p>
              Additionally, when data processing is based on your consent, you may have the right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before such withdrawal. You also have a right to data portability when the data processing is based on a contract between you and Risk Marker and the data was processed by automated means.
            </p>
            <p>
              You have the right to lodge a complaint with the appropriate privacy or data protection regulator in your jurisdiction.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">b. Additional Information</h3>
            <p>
              You may exercise any of these rights by contacting us using the information provided below. We will not discriminate against you for exercising any of these rights. We may need to collect information from you to verify your identity, such as your email address, government issued ID or date of birth, before providing a substantive response to the request. Depending on your location, you may designate, in writing or through a power of attorney document, an authorized agent to make requests on your behalf to exercise your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized them to act on your behalf, and we may need you to verify your identity directly with us.
            </p>
            <p>
              In addition, you may have the right to appeal our decision regarding a request related to these rights by contacting us using the information provided below. When you submit a request or launch an appeal, we will limit our collection of your information to only what is necessary to securely fulfil your request or process your appeal. We will not require you or your authorized agent to pay a fee for the verification of your request or appeal.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">11. HOW TO CONTACT US</h2>
            <p>If you have any questions or comments about this Privacy Policy, please contact:</p>
            <address className="mb-4 not-italic">
              Risk Marker<br />
              Attn: Legal<br />
              P.O. Box 110385<br />
              Trumbull, CT 06611<br />
              Email: matt@wileylaw.com
            </address>
            <p>
              If you would like to make a request to access, review, or correct the personal information we have collected about you, update your preferences, have your information removed from our mailing lists, or no longer receive marketing e-mails resulting from information collected, you may do so by:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Adjusting the settings in the account you created through the Services;</li>
              <li>Unsubscribing via the links contained in emails from us; or</li>
              <li>Contacting us directly.</li>
            </ol>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-500">
                © {new Date().getFullYear()} Risk Marker. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Privacy; 