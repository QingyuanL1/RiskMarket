import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms: React.FC = () => {
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
              Back
            </button>
          </div>
          
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Terms and Conditions</h1>

          <div className="prose prose-lg max-w-none">
            <p>
              This website is operated by Risk Marker, LLC, a Connecticut Limited Liability ("Company," "Risk Marker," "we," "us," or "our), through our website, www.riskmarker.com ("Website"), offers a comprehensive data set for commercial risks intended. Our solution will leverage a combination of data sources and technology solutions that will seamlessly aggregate the required data from the intended insured and adjacent businesses with a single address input. ("data" or "products or services") for sale. The Company offers these products or services for sale subject to these Terms of Use (the "Terms"), which may be updated by us from time to time.
            </p>
            <p>
              By accessing our Website and/or using our products or services in any way, you are agreeing to comply with and be bound by these Terms. In addition, when using our Website, you agree to abide by any posted guidelines for all products or services, which may change from time to time, and to comply with all applicable laws, regulations and rules. If you object to any of these Terms, guidelines, or any subsequent modifications, or if you become dissatisfied with the Website, our products or services, you should immediately discontinue use of the Website. These Terms remain in force and in effect as long as you are a user of the Website and/or a registered user. In the event of termination of membership, service or feature, you will still be bound by your obligations under these Terms, including any indemnifications, warranties and limitations of liability. You should periodically review these Terms. Company reserves the right, at any time, to change the Terms by publishing revised terms on the Website. Any use of the Website and/or our products or services by you, after our publication of any such changes, shall constitute your acceptance of these Terms, as modified, with regard to any additional use of the Website or additional purchase of products or services. You agree that Company is permitted to access and use any other information provided by you to provide products or services and, if necessary, to access such information to obtain contact information in order to provide notifications relating to the products or services we provided you.
            </p>
            <p className="font-bold">
              IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THIS WEBSITE. BY USING THE WEBSITE AND AGREEING TO THESE TERMS, YOU CONFIRM THAT YOU ARE AT LEAST 18 YEARS OLD AND THAT YOU ARE LEGALLY COMPETENT TO ENTER INTO A CONTRACT.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">1. Access to the Website and Restrictions on Your Use</h2>
            <p>
              Company grants you a limited, revocable, nonexclusive, non-transferable license to access our Website and use our products and services for your own personal use only. You may not download or modify any portion of the Website except expressly permitted by Company. No Materials (as defined hereinbelow) from the Website may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way without our express, written permission. Violation of these Terms results in the automatic termination, without notice, of your license to access the Website and may constitute the infringement of Company's copyright, trademark and/or other rights. You agree not to access or try to access any computer system of Company, its programs or its data that are not made available for public use. Except as expressly stated herein, you are not granted any right or license, by implication, estoppel, or otherwise, in or to any patent, trademark, copyright, or proprietary right of Company or any third party, in connection with your use of the Website and any Materials provided by Company or any third party on the Website. Elements of the Website, including custom graphics, images, logos, page headers, sounds, button icons, and the "look and feel" of the Website (including its design, layout, color combinations, button shapes and other graphical elements) are protected by copyright, trade dress and other state and federal laws and may not be copied or imitated, in whole or in part.
            </p>
            <p>
              You agree that you will not do any of the following:
            </p>
            <ol className="list-alpha pl-6 mb-4">
              <li>Use any data mining, robots, spiders, or similar data-gathering and extraction methods within the Website or in any way reproduce or circumvent the navigational structure or presentation of the Website or its contents.</li>
              <li>Circumvent, disable or interfere with the security of the Website or features that prevent, limit or restrict use or copying of the Website or any Materials.</li>
              <li>Copy, reproduce, republish, upload, post, transmit, or distribute in any way any Materials, in whole or in part, without our written permission, other than as expressly allowed by us.</li>
              <li>Transmit any software or other materials containing viruses, worms, Trojan horses, defects, data bombs, time bombs or other destructive or harmful items.</li>
              <li>Modify, adapt, sub-license, translate, sell, reverse engineer, decompile or disassemble any portion of the Website or attempt to derive any source code or underlying ideas or algorithms on the Website.</li>
              <li>Do anything that imposes or may impose, in our sole judgement, an unreasonable or disproportionately large load on our (or our third-party providers') infrastructure.</li>
              <li>"Frame" or "mirror" the Website or any part.</li>
              <li>Use the Website or any Materials for any unlawful purpose.</li>
              <li>Spam or flood.</li>
              <li>Resell or make commercial use of the Website or Materials; or (b) make any derivative use of the Website or Materials.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. Privacy Policy</h2>
            <p>
              Company's Privacy Policy, as displayed on our Website, is part of these Terms. Please read the Company's Privacy Policy as you are agreeing that it applies to our collection and use of information from you. By using or participating in any website or social media site controlled or affiliated with Company, you agree to be bound by our Privacy Policy and this Terms of Service. Under no circumstances will we share your user order history or otherwise transfer it to any other party absent a court order.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">3. Purchasing Products or Services on Our Website</h2>
            <p>
              Company takes reasonable precautions to try to ensure that any prices quoted on the Website are correct, and to describe the subscriptions available on the Website as accurately as possible. However, when ordering products or services featured on the Website, please note that the Company does not warrant that subscription descriptions are accurate, complete, reliable, current, or error-free. If a subscription is not as described when accessed, you should contact our customer service department at support@riskmarker.com.
            </p>
            <p>
              Risk Marker only accepts orders for personal or organizational use. In order to have top notch quality control and customer service you understand our product is strictly direct to consumer. Therefore, you cannot disseminate or resell data or content offered on our Website or purchased from any other medium without our express consent. If Risk Marker discovers that you are using products or services with the intent to disseminate or resell data or content offered on our Website, we may immediately cancel your subscription, suspend or terminate your account, and pursue any and all available legal remedies from you under applicable law. To the extent that your conduct maybe fraudulent, Risk Marker will also report you to federal, state, and/or local enforcements authorities.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">4. Subscription Auto Billing</h2>
            <p>
              If you have elected to be billed by debit card, credit card, or through your bank account, you agree to automatically be enrolled in a recurring payment plan. You agree to allow the Company to automatically charge your credit card or bank account, on a monthly or annual basis, until you terminate this Agreement. You will be responsible for providing Company with your most current billing information.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">5. Pricing Errors and Omissions</h2>
            <p>
              Please be aware that prices, availability, and other purchase terms are subject to change without prior notice. We make every effort to ensure the accuracy of the information on the Website and if errors are discovered, we correct them. Be advised that the Company reserves the right to revoke any stated offer to correct errors, inaccuracies, or omissions, including after a subscription has been submitted, after it has been confirmed, or after your credit card has been charged.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">6. Order Acceptance Policy</h2>
            <p>
              Your receipt of an electronic or other form of order confirmation does not signify our acceptance of your subscription, nor does it constitute confirmation of our offer to sell. Risk Marker reserves the right at any time after receipt of your subscription to accept or decline your subscription for any reason.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">7. Cancellation and Refund Policy</h2>
            <p>
              Due to the custom nature of these products purchase is non-refundable except as required by law.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">8. Taxes</h2>
            <p>
              Risk Marker, LLC shall automatically charge and withhold the applicable sales tax for orders.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">9. Modification or Suspension of the Website</h2>
            <p>
              You agree that Company, in its sole discretion, may make, and at any time, modify, discontinue, or suspend its operation of this Website, social media site, or any part thereof, temporarily or permanently, without notice to you, and you agree that we will not be liable for the consequences of doing so. Specifically, we strongly recommend you download all purchased content so that it is available to you in the event this website is no longer live.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">10. Content Disclaimer</h2>
            <p className="font-bold">
              THE COMPANY AND ITS OWNERS, PRINCIPALS, REPRESENTATIVES AND AGENTS ASSUME NO RESPONSIBILITY FOR ANY CONSEQUENCE RELATING DIRECTLY OR INDIRECTLY TO ANY ACTION OR INACTION YOU TAKE BASED ON THE INFORMATION, PRODUCTS, SERVICES, OR MATERIALS ON THE WEBSITE. WHILE THE COMPANY STRIVES TO KEEP THE INFORMATION ON THE WEBSITE AND ON THE FEATURED PRODUCTS AND SERVICES ACCURATE, COMPLETE, AND UP-TO-DATE, WE CANNOT GUARANTEE, AND WILL NOT BE RESPONSIBLE FOR, ANY DAMAGE OR LOSS RELATED TO THE ACCURACY, COMPLETENESS, OR TIMELINES OF THE INFORMATION ON THE WEBSITE AND IN PRODUCTS AND SERVICES FEATURED ON THE WEBSITE.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">11. Assumption of Risk</h2>
            <p>
              You expressly acknowledge and agree that your access, use and/or involvement with any Company services, subsidiaries, or individuals certified by Company, or its subsidiaries, products or services may involve inherent privacy and hacking risks. You hereby acknowledge and willingly accept these risks and agree to unconditionally release and hold harmless Company from and against all claims, suits, damages, losses, causes of action, costs, expenses or liability arising out of or related to your access, use and/or involvement with any services provided under this agreement.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">12. Disclaimer of Warranties with Respect to Use of Website and Products and Services</h2>
            <p className="font-bold">
              THE WEBSITE AND ALL PRODUCTS AND SERVICES FEATURED ON IT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. EXCEPT AS SPECIFICALLY PROVIDED HEREIN, TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, THE COMPANY EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTIUCLAR PURPOSE AND NON-INFRINGEMENT.
            </p>
            <p className="font-bold">
              WHILE THE COMPANY USES REASONABLE EFFORTS TO INCLUDE ACCURATE AND UP-TO-DATE INFORMATION ON THE WEBSITE, THE COMPANY DOES NOT MAKE ANY WARRANTY THAT THE WEBSITE WILL MEET YOUR REQUIREMENTS, OR THAT ACCESS TO THE WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE, OR THAT DEFECTS, IF ANY, WILL BE CORRECTRED. THE COMPANY MAKES NO WARRANTIES AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE WEBSITE OR THE PROCUTS AND SERVICES FEATURED THEREON, OR AS TO THE ACCURACY, QUALITY, OR RELIABILITY OF ANY INFORMATION OBTAINED THROUGH THE WEBSITE.
            </p>
            <p className="font-bold">
              YOU UNDERSTAND AND AGREE THAT ANY MATERIAL AND/OR DATA DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE WEBSITE, IS USED AT YOUR OWN RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF SUCH MATERIAL AND/OR DATA.
            </p>
            <p className="font-bold">
              NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE COMPANY OR THROUGH THE WEBSITE SHALL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">13. Limitations of Liability and Damages</h2>
            <p className="font-bold">
              YOU AGREE THAT COMPANY'S LEGAL LIABILITY, INCLUDING THE LIABILITY OF ITS AFFILATES, OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES OR AGENTS, FOR ANY CLAIM MADE BY YOU ARISING OUT OF YOUR USE OF THE WEBSITE OR PURCHASE OF PRODUCTS OR SERVICES OFFERED THEREON SHALL BE LIMTED TO THE AMOUNT YOU PAID TO COMPANY. UNDER NO CIRCUMSTANCES WILL SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES BE AWARDED, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS EXCLUSION MAY NOT APPLY TO YOU. HOWEVER, IN STATES WHERE THIS LIMITATION OF LIABILITY MAY BE ILLEGAL OR OTHERWISE ENFORCABLE YOU AGREE TO THE HIGHEST LIMITATION OF LIABILITY AS WOULD BE PERMITTED UNDER STATE LAW AS LONG AS IT DOES NOT EXCEEDED EWHAT IS AGREED TO IN THIS DOCUMENT.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">14. Compliance with Laws</h2>
            <p>
              You agree to comply with all applicable federal, state and local laws, regulations, rules and ordinances regarding your use of the Website, including, without limitation, laws regarding import/export of technical data by virtue of your online transaction.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">15. Indemnity</h2>
            <p>
              You agree to defend, indemnify and hold Company, its affiliates, officers, subsidiaries, successors, assigns, directors, agents, service providers, attorneys, suppliers and employees, harmless from any claim or demand, including reasonable attorneys' fees and court costs, made by any third party due to, or arising out of, your use of the Website or our products or services, your violation of the Terms, or your breach of any of your acknowledgements, agreements, representations, warranties and obligations herein.
            </p>
            <p className="font-bold">
              YOU ACKNOWLEDGE THAT COMPANY HAS SET ITS PRICES AND HAS PROVIDED ACCESS TO THE WEBSITE IN RELIANCE OF THESE LIMITATIONS OF LIABILITY AND DAMAGES AND THE INDEMNITY IN THESE TERMS, AND THAT THOSE LIMITATIONS ARE AN ESSENTIAL BASIS UPON WHICH COMPANY PROVIDES ITS WEBSITE AND OFFERS ITS PRODUCTS AND SERVICES. YOU AGREE THAT THESE LIMITATIONS OF LIABILITY AND DAMAGES AND THE INDEMNITY IN THESE TERMS SURVIVE AND APPLY EVEN IF FOUND TO HAVE FAILED OF THEIR ESSENTIAL PURPOSE.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">16. Links to Third-Party Sites</h2>
            <p>
              The Website may link to other websites that are independent of Company. These links are provided only as a convenience. We make no representation or warranty as to the accuracy, completeness or authenticity of the information contained in, or in the products or services provided or sold by, any such site. You visit any such website at your own risk. You agree that Company is not responsible for any loss or damage of any sort you may incur from dealing with such third-party website(s).
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">17. Mobile Networks</h2>
            <p>
              When you access any Company services through a mobile network, such as one of our mobile applications, or you sign up for our text message programs, your network or roaming provider's messaging, data and other rates and fees may apply. Not all Company services may work with your network provider or device.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">18. Ownership of Content</h2>
            <p>
              Company owns and operates this Website. Company or third parties own all rights, titles and interests in and to the materials provided on this Website, including but not limited to, the "look and feel" of the Website (including its design, layout, color combinations, button shapes and other graphical elements), information, documents, logos, graphics, sounds, page headers, button icons, service markers, trademarks, trade dress, and images (collectively, the "Materials"). Except as otherwise expressly provided by us, you may not copy, republish, reproduce, upload, download, display, post, distribute, or transmit the Materials in any way. Nothing on this Website confers any license, expressed or implied, of Company's intellectual property rights. Any rights not expressly granted to you by these Terms are reserved by us.
            </p>
            <p>
              All Website design, text, graphics, and the selection and arrangement thereof, are owned by Company. ALL RIGHTS RESERVED.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">19. Enforcement of Rules and Policies</h2>
            <p>
              We may allow you and users of our websites to communicate, submit, upload or otherwise make available text, reviews, stories, images, photos, audio, video, media, chats, testimonials, personally identifiable information, feedback about our products and services, or any other content ("User Content"). User Content that you submit will be stored, maintained and used by Risk Marker in accordance with our Privacy Policy. You acknowledge certain types of User Content that you submit, such as chats, photos, reviews, and message board entries, may be accessed and viewed by the public.
            </p>
            <p>
              You may not submit or upload User Content that Risk Marker determines in its sole and absolute discretion is illegal, infringing, false, defamatory, harassing, threatening, bigoted, hateful, violent, vulgar, obscene, pornographic, or otherwise offensive or that harms, or can reasonably be expected to harm any person or entity, whether or not such material is protected by law. We have the right, but not the obligation, to monitor, screen, post, remove, modify, store and review User Content or communications you submit, at any time and for any or no reason, including to ensure that the User Content or communication conforms to these Terms, without prior notice to you.
            </p>
            <p>
              You hereby grant Risk Marker an exclusive and unlimited license to use such materials to promote their business and to create new and additional products for their users. Notwithstanding, any photographs or personally identifiable information will be removed upon request from websites that are owned by Risk Marker.
            </p>
            <p>
              In the event that a personal identifiable photograph or other User Content is posted on a site outside of Risk Marker's control, you reserve the right to enforce your property rights against that third-party offender. You however agree to indemnify Risk Marker from the leak or reposting and may not pursue damages against Risk Marker for the dissemination of this User Content so long as it was used along with the terms of this agreement. If a leak happens in which an employee or contractor of Risk Marker releases said images or other User Generated Content, you understand and assume the risk of this dissemination. You may pursue that individual personally either civilly or criminally but you understand that in order for Risk Maker to provide complete protection the cost to do so would be prohibitive to the business and as such they specifically designate that you assume that risk in working on this site.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">20. Governing Law</h2>
            <p>
              The Terms and the relationship between you and Company shall be governed by the laws of the State of Connecticut without regard to any conflicts of laws principles.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">21. Dispute Resolution by Binding Arbitration</h2>
            <p className="font-bold">
              PLEASE READ THIS CAREFULLY. IT AFFECTS YOUR RIGHTS.
            </p>
            <p>
              Most of your concerns can be resolved quickly to your satisfaction by contacting our Customer Service Center via support@riskmarker.com. In the unlikely event that Customer Service cannot resolve your complaint to your satisfaction, or if we have not been able to resolve a dispute with you after trying to do so informally, we each agree to resolve those disputes through binding arbitration rather than in court. Arbitration is less formal than a lawsuit. Arbitration uses a neutral arbitrator instead of a judge or jury, allows less discovery than courts, and is subject to very limited court review. The American Arbitration Association (AAA) will serve as the arbitration provider. We agree that any arbitration under these Terms will take place on an individual basis. Representative, group, collective or class actions or arbitrations are not permitted. As explained below, if you prevail in arbitration, Company may pay you more than the amount of the arbitrator's award and will pay your actual, reasonable attorney's fees, if you are awarded an amount greater than what Company offered you settle the dispute before arbitration.
            </p>
            <p>
              You may speak with your own lawyer before using this Website or purchasing any product or service, but your use of this Website and the purchase of any product or service constitutes your agreement to these Terms.
            </p>
            <p>
              Arbitration Agreement:
            </p>
            <p>
              Company and you agree to arbitrate all disputes and claims between us before a single arbitrator. The kinds of disputes and claims we agree to arbitrate are intended to be broadly interpreted, including but not limited to:
            </p>
            <ol className="list-alpha pl-6 mb-4">
              <li>Claims arising out of, or relating to, any aspect of the relationship between us, whether based in contract, tort, statute, fraud, misrepresentation, advertising, or any other legal theory;</li>
              <li>Claims that arose before these or any prior Terms became effective;</li>
              <li>Claims that are currently the subject of purported class action litigation in which you are not a member of a certified class; and</li>
              <li>Claims that may arise after the termination of these Terms.</li>
            </ol>
            <p>
              For the purposes of this Arbitration Agreement, references to "Company," "you," and "us," include our respective subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of Website and our products and services under these Terms or any prior agreements between us.
            </p>
            <p>
              This arbitration agreement does not preclude your brining issues to the attention of federal, state, or local agencies. Such agencies can, if the law allows, seek relief against us on your behalf. You agree that, by entering into these Terms, you and Company are each WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A REPRESENTATIVE, GROUP, COLLECTIVE OR CLASS ACTION OR ARBITRATION.
            </p>
            <p>
              You acknowledge that use of this Website and/or purchase of products or services constitutes a transaction in interstate commerce. The Federal Arbitration Act ("FAA") governs the interpretation and enforcement of this Arbitration Agreement. This Arbitration Agreement survives termination of these Terms.
            </p>
            <p>
              A party seeking arbitration under these Terms must first send, by U.S. certified mail, a written Notice of Dispute ("Notice") to the other party. A Notice to Company should be addressed to: [addressee and address, Attn: Notice of Dispute (the "Notice Address"). Company may send a written Notice to the electronic mail address that you provided when you created an account, if any. The Notice must (a) describe the nature and basis of the claim or dispute and (b) set forth the specific relief sought ("Demand"). If Company and you do not reach an agreement to resolve the claim within 30 days after the Notice is received, you or Company may commence an arbitration proceeding. During the arbitration, the amount of any settlement offer made by Company or you shall not be disclosed to the arbitrator until after the arbitrator determines the amount, if any, to which you or we are entitled.
            </p>
            <p>
              You may download or copy a form to initiate arbitration from the American Arbitration Association ("AAA") website at:
            </p>
            <p>
              <a href="https://www.adr.org/support" className="text-blue-600 hover:text-blue-800">
                https://www.adr.org/support
              </a>
            </p>
            <p>
              After Company receives notice at the Notice Address that you have commenced arbitration, it will promptly reimburse you for your payment of the filing fee, unless your total claim is for more than $75,000. If your total claim exceeds $75,000, the payment of all arbitration fees will be governed by the AAA rules. The filing fee for consumer-initiated arbitrations is currently $200, but this is subject to change by AAA, the arbitration provider. If you are unable to pay this fee and your total claim is for $75,000 or less, Company will pay the filing fee directly after receiving a written request at the Notice Address. Except as otherwise provided herein, Company will pay all AAA filing, administration, and arbitrator fees for any arbitration initiated in accordance with these Terms. If, however, the arbitrator finds that either the substance of your claim or the relief sought in the Demand is frivolous or brought forth for an improper purpose (as measured by the standards in Federal Rule of Civil Procedure 11(b)), then the payment of all such fees will be governed by the AAA Rules. In such case, you agree to reimburse the Company for all monies previously disbursed by it that are otherwise your obligation to pay under the AAA Rules.
            </p>
            <p>
              All arbitration proceedings will be governed by the Commercial Dispute Resolution Procedures and the Supplementary Procedures for Consumer Related Disputes of the AAA (collectively, the "AAA Rules"), as modified by these Terms, and will be administered by the AAA. The AAA Rules are available online at www.adr.org or by calling the AAA at 1-800-778-7879. The arbitrator is bound by these Terms. All issues are for the arbitrator to decide, except that issues relating to the scope, enforceability, and interpretation of the arbitration provision and the scope, enforceability, and interpretation of Article 23 are for the court to decide.
            </p>
            <p>
              Unless Company and you agree otherwise, any arbitration hearings will take place in the country or parish of the Company's primary address in Connecticut. If your total claim is for $10,000 or less, you may choose whether the arbitration will be conducted solely on the basis of documents submitted to the arbitrator, by a telephone hearing, or by an in-person hearing governed by the AAA Rules. If you choose to proceed either by telephone or in person, we may choose to respond only by written or telephonic response. If your claim exceeds $10,000, the AAA Rules will determine whether you have a right to a telephone or in-person hearing. The parties agree that in any arbitration under these Terms, neither party will rely on any award or finding of fact or conclusion of law made in any other arbitration to which Company was a party. In all cases, the arbitrator shall issue a reasoned, written decision sufficient to explain the findings of fact and conclusions of law on which the award is based.
            </p>
            <p>
              If the arbitrator finds in your favor in any respect on the merits of your claim, and the arbitrator issues you an award that is greater than the value of our last written settlement offer made before an arbitrator was selected, then Company will pay you either the amount of the award or $2,000 ("the Alternate Payment"), whichever is greater, plus the actual amount of reasonable attorney's fees and expenses that you incurred in investigating, preparing, and pursuing your claim in arbitration (the "Attorney's Payment"). If we did not make you a written offer to settle the dispute before an arbitrator was selected, you will be entitled to receive the Alternative Payment and the Attorney's Payment, respectively, if the arbitrator awards you any relief on the merits. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees, expenses, and the Alternative Payment and the Attorney's Payment at any time during the proceeding and upon request from either party made within 14 days of the arbitrator's ruling on the merits. In assessing whether an award that includes attorney's fees or expenses is greater than the value of Company's last written settlement offer, the arbitrator shall consider only the actual attorney's fees or expenses reasonably incurred before Company's settlement offer.
            </p>
            <p>
              The right to attorney's fees and expenses discussed in paragraph (f) supplements any right to attorney's fees and expenses you may have under applicable law. If you would be entitled to a larger amount under applicable law, this provision does not preclude the arbitrator from awarding you that amount. However, you may not recover duplicative awards of attorney's fees or costs. Although under some laws Company may have a right to an award of attorney's fees and expenses from you if it prevails in an arbitration, we will not seek such an award.
            </p>
            <p className="font-bold">
              The arbitrator may award monetary and injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party's individual claim. YOU AND COMPANY AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITIES AND NOT AS PLANTIFFS OR CLASS MEMBERS IN ANY PURPORTED REPRESENTATIVE, GROUP OR CLASS ACTION OR ARBITRATION, OR IN THE CAPACITY OF A PRIVATE ATTORNEY GENERAL. Further, unless both you and Company agree otherwise, the arbitrator may not consolidate more than one person's claims and may not otherwise preside over any form of a representative, group or class proceeding. The arbitrator may award any relief that a court could award that is individualized to the claimant and would not affect other customers. Neither you nor we may seek non-individualized relief that would affect other customers. If a court decides that applicable law precludes enforcement of any of this paragraph's limitations as to a particular claim for relief, then that claim (and only that claim) must be severed from the arbitration and may be brought to court. All other claims remain subject to this Arbitration Agreement.
            </p>
            <p>
              If the total amount in disputes exceeds $75,000 or either party seeks any form of injunctive relief, either party may appeal the award to a three-arbitrator panel administered by AAA by a written notice of appeal within thirty (30) days from the date of entry of the written arbitration award. An award of injunctive relief hall be strayed during any such appeal. The members of the three-arbitrator panel will be selected according to AAA rules. The three-arbitrator panel will issue its decision within one hundred and twenty (120) days of the date of the appealing party's notice of appeal. The decision of the three-arbitrator panel shall be final and binding, subject to any right of judicial review that exists under the FAA.
            </p>
            <p>
              Notwithstanding any provision in these Terms to the contrary, we agree that if we make any material change to this arbitration provision (other than a change to any notice address, website link or telephone number), that change will not apply to any dispute of which we had written notice on the effective date of the change. Moreover, if we seek to terminate this arbitration provision, any such termination will not be effective until at least thirty (30) days after written notice of such termination is provided to you, and shall not be effective as to disputes which arose prior to the date of termination.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">22. Digital Millennium Copyright Act</h2>
            <p>
              If you are a copyright owner or an agent and believe that any Material or content on this Website infringes your copyright, you may submit a notification under the Digital millennium Copyright Act ("DMCA") by providing the following information in writing (see 17 U.S.C 512(c)(3) for further detail):
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
              <li>Identification of the copyrighted work claimed to have been infringed, or if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site;</li>
              <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled and information reasonably sufficient to permit the service provider to locate the material;</li>
              <li>Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone number, and, if available, electronic mail;</li>
              <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and</li>
              <li>A statement that the information in the notification is accurate and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
            </ol>
            <p>
              Our designated agent to receive notifications of claimed infringement is: Matthew Wiley, Wiley Law, LLC, PO Box 110385, Trumbull, CT 06611. Attn: DMCA Notice. Only DMCA notices should go to the agent; any other communications should be directed to out customer service department via support@riskmarker.com.
            </p>
            <p>
              In order to contact Company regarding a complaint about the Website or Materials, please contact us at support@riskmarker.com.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">23. Severability of Agreement</h2>
            <p>
              If any provision of the Agreement is found by a court or other binding authority to be invalid, you agree that every attempt shall be made to give effect to the parties' intentions as reflected in that provision, and the remaining provisions contained in this Agreement shall continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">24. Electronic Signatures and Agreements</h2>
            <p>
              You acknowledge and agree that by clicking on the button labeled "SUBMIT", "DOWNLOAD", "I ACCEPT" or such similar links as may be designated by the Company to accept the terms and conditions of these Terms, you are submitting a legally binding electronic signature and are entering into a legally binding contract. You acknowledge that your electronic submissions constitute your agreement and intent to be bound by this Agreement pursuant to any applicable statutes, regulations, rules, ordinances or other laws, including without limitation to the United States Electronic Signatures in Global and National Commerce Act.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">25. Technical Support</h2>
            <p>
              If you encounter a technical problem printing or accessing your completed application, or some other problem, our customer service representatives may be able to help.
            </p>
            <p>
              If you ask a customer service representative to remotely control your computer in order to try to resolve your problem, you acknowledge and accept that Company is not liable for any technical problems that may persist or arise with your computer after doing so.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">26. Miscellaneous</h2>
            <p>
              These Terms constitute the entire agreement between you and Company. They govern your use of the Website and Materials and supersede any prior agreements between you and us. Company's failure to exercise or enforce any right or provision of the Terms shall not constitute a waiver of such right or provision. The Terms do not limit any rights that Company may have under trade secret, copyright, patent or other laws. Company's employees are not authorized to modify the Terms, or to make any additional representations, commitments, or warranties binding on Company, except in writing signed by an authorized Company officer. If any provision of these Terms is found to be invalid, you agree that the other provisions of the Terms remain in full force and effect.
            </p>
            <p>
              You warrant, represent and agree that, by using the Website and/or the products or services, you (i) have carefully read and considered these Terms and fully understand its contents, (ii) are consenting to these Terms of your own free will, based upon your own judgement and without any coercion of fear or retaliation, and (iii) you have had a chance to consult independent legal counsel with respect to these Terms.
            </p>
            <p>
              In the event that you breach these Terms, Company will, in addition to all other available remedies, be entitled to the equitable remedies of a temporary restraining order, preliminary and/or permanent injunction.
            </p>

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

export default Terms; 