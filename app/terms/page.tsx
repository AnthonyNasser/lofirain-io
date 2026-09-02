import type { Metadata } from "next";
import { LegalPage } from "../legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for lofirain.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 27, 2026"
      intro="These Terms are a binding agreement between you and LofiRain LLC governing your use of the lofirain app, lofirain.io, and related services."
    >
      <h2>1. Acceptance and eligibility</h2>
      <p>
        By downloading, accessing, or using lofirain (the “Service”), you agree
        to these Terms and our <a href="/privacy">Privacy Policy</a>. If you do
        not agree, do not use the Service. If you use the Service on behalf of
        an organization, you represent that you have authority to bind it.
      </p>
      <p>
        You must be legally capable of entering into this agreement. If you are
        under the age of majority where you live, a parent or legal guardian
        must review and agree to these Terms on your behalf. The Service is not
        directed to children under 13.
      </p>

      <h2>2. App Store terms</h2>
      <p>
        If you obtain lofirain through Apple’s App Store, Apple’s Licensed
        Application End User License Agreement (the “Standard EULA”) applies to
        your use of the app, and these Terms supplement it. If these Terms
        conflict with the Standard EULA or mandatory App Store usage rules, the
        Standard EULA or mandatory usage rules control to the extent of the
        conflict. Apple is not responsible for the Service or its content,
        maintenance, support, warranties, or claims relating to the Service.
      </p>

      <h2>3. Limited license</h2>
      <p>
        Subject to these Terms, LofiRain LLC grants you a limited, personal,
        revocable, non-exclusive, non-transferable, and non-sublicensable
        license to use the Service for lawful, noncommercial personal use on
        devices you own or control, subject to applicable platform rules. The
        Service is licensed, not sold. All rights not expressly granted are
        reserved.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You may not, and may not help anyone else to:</p>
      <ul>
        <li>use the Service in violation of law or another person’s rights;</li>
        <li>
          copy, modify, distribute, sell, lease, sublicense, publicly perform,
          or create derivative works from the Service except as law or an
          applicable open license expressly permits;
        </li>
        <li>
          reverse engineer, decompile, disassemble, or attempt to derive source
          code, except where applicable law prohibits this restriction;
        </li>
        <li>
          bypass security, access controls, attribution, license notices, or
          technical limitations;
        </li>
        <li>
          interfere with the Service, introduce malicious code, scrape it at
          scale, or use automated means that burden its infrastructure; or
        </li>
        <li>
          extract, redistribute, resell, or separately exploit audio or other
          content except as the applicable rights holder, license, and law
          permit.
        </li>
      </ul>

      <h2>5. Music and third-party rights</h2>
      <p>
        The catalog includes music obtained from third-party source listings,
        including Free Stock Music and Purrple Cat, and may include works made
        available under Creative Commons licenses such as CC BY 3.0 and CC
        BY-SA 3.0. The applicable source and license details are identified in
        the app metadata and on our <a href="/music-credits">music credits</a>
        page. Those third-party licenses, not these Terms, govern rights granted
        directly by a rights holder in a particular track.
      </p>
      <p>
        Artists and other rights holders retain ownership of their works.
        Inclusion in the Service does not transfer ownership to LofiRain LLC or
        to you. You are responsible for reviewing and complying with the
        applicable license before using a track outside the ordinary playback
        functions of the Service. References to third-party sources do not
        imply sponsorship or endorsement.
      </p>

      <h2>6. Copyright and rights-holder requests</h2>
      <p>
        We respect intellectual-property rights. If you believe content in the
        Service infringes or otherwise violates your rights, submit a detailed
        request through our <a href="/takedown">takedown page</a>. You must
        provide accurate information and must not knowingly misrepresent that
        content is unauthorized. We may remove or restrict content while we
        investigate and may preserve related records as required by law.
      </p>

      <h2>7. Ownership and feedback</h2>
      <p>
        Except for third-party content, LofiRain LLC and its licensors own the
        Service, including its software, design, artwork, branding, and other
        materials. Our names, logos, and trade dress may not be used without
        prior written permission. If you voluntarily provide suggestions or
        feedback, you grant us a perpetual, worldwide, royalty-free right to
        use it without restriction or compensation, without identifying you.
      </p>

      <h2>8. Third-party services and connectivity</h2>
      <p>
        The Service may depend on or link to Apple, hosting providers, music
        sources, network providers, or other third parties. Their terms and
        privacy practices govern their services. LofiRain LLC does not control
        and is not responsible for third-party services. You are responsible
        for devices, internet access, data charges, and compliance with
        applicable third-party terms.
      </p>

      <h2>9. Changes, availability, and termination</h2>
      <p>
        We may add, remove, suspend, or discontinue features or content, issue
        updates, or stop supporting devices or operating-system versions. We do
        not promise that any feature, track, or content will remain available.
        You may stop using the Service at any time. We may suspend or terminate
        access if you materially violate these Terms, create legal or security
        risk, or if necessary to comply with law. Sections that by their nature
        should survive termination will survive, including ownership,
        disclaimers, liability limits, indemnity, and dispute provisions.
      </p>

      <h2>10. No professional advice or guaranteed results</h2>
      <p>
        lofirain is an entertainment and productivity tool. It does not provide
        medical, mental-health, therapeutic, or other professional advice, and
        it is not an emergency service. We do not guarantee focus, sleep,
        relaxation, productivity, or any other outcome. Do not use the Service
        where audio or distraction could create a safety risk.
      </p>

      <h2>11. Disclaimers</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE AND ALL CONTENT ARE
        PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND,
        WHETHER EXPRESS, IMPLIED, OR STATUTORY. LOFIRAIN LLC DISCLAIMS IMPLIED
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
        NON-INFRINGEMENT, QUIET ENJOYMENT, AND WARRANTIES ARISING FROM COURSE OF
        DEALING OR USAGE OF TRADE. WE DO NOT WARRANT THAT THE SERVICE WILL BE
        ACCURATE, COMPLETE, SECURE, UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL
        COMPONENTS, OR THAT DEFECTS WILL BE CORRECTED.
      </p>
      <p>
        Some jurisdictions do not allow certain warranty exclusions. In those
        jurisdictions, the exclusions apply only to the extent permitted by
        law, and you may have additional rights.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOFIRAIN LLC AND ITS MEMBERS,
        MANAGERS, EMPLOYEES, CONTRACTORS, LICENSORS, AND SERVICE PROVIDERS WILL
        NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
        EXEMPLARY, OR PUNITIVE DAMAGES; LOSS OF PROFITS, DATA, GOODWILL, OR
        BUSINESS; DEVICE DAMAGE; OR COST OF SUBSTITUTE SERVICES, ARISING OUT OF
        OR RELATING TO THE SERVICE OR THESE TERMS, EVEN IF ADVISED OF THE
        POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE TOTAL AGGREGATE LIABILITY OF
        LOFIRAIN LLC AND THE PARTIES LISTED ABOVE FOR ALL CLAIMS ARISING OUT OF
        OR RELATING TO THE SERVICE OR THESE TERMS WILL NOT EXCEED THE GREATER OF
        (A) THE AMOUNT YOU PAID TO LOFIRAIN LLC FOR THE SERVICE DURING THE 12
        MONTHS BEFORE THE EVENT GIVING RISE TO LIABILITY OR (B) US$100.
      </p>
      <p>
        These limitations do not apply to liability that cannot lawfully be
        limited or excluded, including where applicable liability for fraud,
        willful misconduct, or death or personal injury caused by negligence.
      </p>

      <h2>13. Indemnity</h2>
      <p>
        To the extent permitted by law, you will defend, indemnify, and hold
        harmless LofiRain LLC and its members, managers, employees, contractors,
        and licensors from third-party claims, damages, judgments, losses, and
        reasonable legal fees arising from your unlawful use of the Service,
        your material breach of these Terms, or your infringement of another
        person’s rights. This obligation does not apply to the extent a claim
        results from the indemnified party’s own negligence, willful misconduct,
        or violation of law. We may control the defense of an indemnified claim,
        and you agree to reasonably cooperate.
      </p>

      <h2>14. Disputes and governing law</h2>
      <p>
        Before filing a claim, you and LofiRain LLC agree to make a good-faith
        effort for 30 days to resolve the dispute informally after written
        notice describing the claim and requested relief. This requirement does
        not prevent either party from seeking urgent injunctive relief or
        filing an eligible claim in small-claims court.
      </p>
      <p>
        These Terms are governed by the laws of the State of California,
        without regard to conflict-of-laws rules. Unless applicable consumer
        law gives you the right to bring a claim elsewhere, any judicial
        proceeding must be brought in the state or federal courts located in
        Los Angeles County, California, and each party consents to their
        jurisdiction and venue. Nothing in these Terms limits non-waivable
        rights or remedies available under applicable law.
      </p>

      <h2>15. General terms</h2>
      <p>
        These Terms, the Privacy Policy, and any terms expressly incorporated
        by reference are the entire agreement concerning the Service. If a
        provision is unenforceable, it will be enforced to the maximum extent
        permitted and the remaining provisions will remain effective. Our
        failure to enforce a provision is not a waiver. You may not assign
        these Terms without our written consent; we may assign them in
        connection with a merger, acquisition, reorganization, asset transfer,
        or by operation of law. Headings are for convenience only. Neither
        party is liable for delay or failure caused by events beyond its
        reasonable control.
      </p>

      <h2>16. Changes to these Terms</h2>
      <p>
        We may update these Terms to reflect changes to the Service, law, or our
        practices. We will post the updated Terms and revise the “Updated” date.
        If a change materially reduces your rights, we will provide additional
        notice or request consent when required by law. Changes apply
        prospectively from their effective date. Your continued use after that
        date constitutes acceptance where permitted by law.
      </p>

      <h2>17. Contact</h2>
      <p>
        Questions, complaints, or legal notices concerning the Service or these
        Terms may be submitted through our <a href="/takedown">contact form</a>.
        State clearly that the message concerns these Terms rather than a music
        takedown request.
      </p>
    </LegalPage>
  );
}
