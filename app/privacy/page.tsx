import type { Metadata } from "next";
import { LegalPage } from "../legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Lofi Rain.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 24, 2026"
      intro="This Privacy Policy explains how LofiRain LLC collects, uses, discloses, and retains information when you use the Lofi Rain app, lofirain.io, or contact us."
    >
      <h2>1. Scope and responsible company</h2>
      <p>
        LofiRain LLC (“LofiRain,” “we,” “us,” or “our”) is responsible for the
        practices described in this Policy. This Policy applies to the Lofi Rain
        mobile application, lofirain.io, and requests you submit to us
        (collectively, the “Service”). It does not govern third-party services
        that have their own privacy policies, including Apple and websites
        linked from our music credits.
      </p>

      <h2>2. Information we collect</h2>
      <p>We collect the following limited categories of information:</p>
      <ul>
        <li>
          <strong>Information you submit.</strong> If you contact us or submit a
          rights-holder request, we receive the information you provide, such as
          your name, email address, artist or organization, relationship to a
          work, track and source details, and message contents.
        </li>
        <li>
          <strong>Website technical data.</strong> Our hosting and security
          providers may automatically process IP address, browser and device
          type, operating system, requested URL, referring URL, timestamps, and
          similar request or diagnostic information needed to deliver, secure,
          and troubleshoot the website.
        </li>
        <li>
          <strong>On-device app data.</strong> The app stores preferences and
          operational data on your device, such as your selected companion,
          listening mode, timer, ambient sound, playback settings, progress, and
          downloaded or cached audio.
        </li>
        <li>
          <strong>Account information.</strong> An account is optional. If you
          create one, we receive the email address you sign up with, or, if you
          use Sign in with Apple, the email address Apple shares with us (which
          may be a private relay address), along with an account identifier. If
          you sign up with email, your password is handled by our authentication
          provider and we do not see it.
        </li>
        <li>
          <strong>Synced progress.</strong> If you are signed in, we store your
          progress so it can follow you between devices: your selected
          companion, scene, and listening mode; the companions, visualizers, and
          backgrounds you have unlocked; and a record of your completed timers
          and listening sessions, including their start and end times, length,
          companion, and listening mode.
        </li>
        <li>
          <strong>App usage events.</strong> The app records how its features
          are used, such as app opens, onboarding steps, playback and timer
          starts and stops, companion and visualizer changes, unlocks, and
          subscription screen and purchase events. Each event includes its time,
          your app version and build, operating system version, device language
          and region setting, and whether you have Premium. If you are not
          signed in, events are linked to a random identifier created for this
          purpose, not to your name or email. If you are signed in, events are
          linked to your account. Events never include text you type.
        </li>
        <li>
          <strong>Subscription status.</strong> Premium is sold through Apple’s
          App Store. Apple processes your payment, and we receive whether your
          subscription is active and which plan you chose. We never receive your
          payment-card details.
        </li>
        <li>
          <strong>Information from service providers.</strong> We may receive
          delivery status and basic diagnostic information from providers that
          host the website or deliver messages. Apple may provide app download,
          performance, or crash information according to your device settings
          and Apple’s policies. We do not receive your Apple ID password or full
          payment-card details.
        </li>
      </ul>
      <p>
        You can use Lofi Rain without an account. We do not intentionally
        collect precise location, contacts, photos, microphone recordings,
        health data, biometric data, government identifiers, or
        financial-account details through the current version of the Service.
      </p>

      <h2>3. How we use information</h2>
      <p>We use information only as reasonably necessary to:</p>
      <ul>
        <li>provide, operate, maintain, and secure the Service;</li>
        <li>save app settings and provide requested playback functions;</li>
        <li>
          create and maintain your account and sync your progress across your
          devices;
        </li>
        <li>provide Premium and confirm your subscription status;</li>
        <li>
          understand how features are used so we can fix problems and improve
          the app;
        </li>
        <li>
          receive, verify, investigate, and respond to support, privacy,
          copyright, and other rights-holder requests;
        </li>
        <li>
          detect, prevent, and troubleshoot misuse, fraud, and security issues;
        </li>
        <li>comply with law and enforce our agreements; and</li>
        <li>
          create aggregated or de-identified information that cannot reasonably
          be linked to you.
        </li>
      </ul>

      <h2>4. How we disclose information</h2>
      <p>We may disclose information in these limited circumstances:</p>
      <ul>
        <li>
          <strong>Service providers.</strong> Vendors may process information on
          our behalf to provide hosting, security, email delivery, and related
          infrastructure. These currently include Supabase for accounts, synced
          progress, app usage events, and audio hosting; Vercel for website
          hosting; and Resend for delivery of submitted requests. Apple provides
          Sign in with Apple and processes App Store purchases under its own
          privacy policy.
        </li>
        <li>
          <strong>Legal and safety reasons.</strong> We may disclose information
          when we reasonably believe disclosure is required by law, legal
          process, or a valid government request, or is necessary to protect
          rights, safety, security, or prevent fraud or abuse.
        </li>
        <li>
          <strong>Business transfers.</strong> Information may be disclosed as
          part of due diligence or transferred in connection with a merger,
          financing, acquisition, reorganization, bankruptcy, or sale of all or
          part of our business, subject to applicable law.
        </li>
        <li>
          <strong>At your direction.</strong> We may disclose information when
          you direct us or give consent.
        </li>
      </ul>
      <p>
        We do not sell personal information for money. We do not share personal
        information for cross-context behavioral advertising, use it for
        targeted advertising, or knowingly disclose it to data brokers. We do
        not offer financial incentives for personal information.
      </p>

      <h2>5. Cookies, analytics, and tracking choices</h2>
      <p>
        We do not currently use advertising cookies or third-party advertising
        analytics on lofirain.io. Our infrastructure providers may use essential
        technologies or server logs to deliver, secure, and diagnose the
        website. In the app, we record the usage events described in Section 2
        using our own tools. The app does not include third-party advertising or
        analytics SDKs, and we do not track you across other companies’ apps or
        websites. Browser “Do Not Track” signals are not standardized; the
        website does not respond differently to them because we do not currently
        track visitors across unaffiliated websites. Because we do not sell or
        share personal information for cross-context behavioral advertising, a
        Global Privacy Control signal does not change the current experience. We
        will honor legally recognized opt-out signals if our practices change in
        a way that makes them applicable.
      </p>

      <h2>6. Retention</h2>
      <p>
        We retain personal information only for as long as reasonably necessary
        for the purposes described above, including to respond to requests, keep
        appropriate records of rights-holder matters, maintain security, resolve
        disputes, enforce agreements, and satisfy legal obligations. Retention
        periods depend on the information and context. Account information and
        synced progress are kept while your account is active. App usage events
        are kept to understand how the app is used over time. Random identifiers
        for devices that never sent any events are removed after 30 days.
        Service providers retain technical logs under their own documented
        schedules. On-device preferences and cached audio generally remain until
        you change settings, clear app data, or delete the app, subject to
        device backup behavior controlled by you or your platform provider.
      </p>

      <h2>7. Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational
        safeguards appropriate to the nature of the information we process.
        However, no method of transmission, storage, or security is completely
        reliable. We cannot guarantee absolute security, and you should not
        submit information that is unnecessary for your request.
      </p>

      <h2>8. Your privacy choices and rights</h2>
      <p>
        Depending on where you live and subject to legal exceptions, you may
        have rights to request access to, correction of, or deletion of your
        personal information; obtain a portable copy; restrict or object to
        certain processing; withdraw consent; or appeal a denied request. You
        may also have the right not to receive discriminatory treatment for
        exercising a privacy right.
      </p>
      <p>
        To make a request, use our <a href="/takedown">contact form</a> and
        state that the message is a privacy request. Describe the right you wish
        to exercise. We may ask for information reasonably necessary to verify
        your identity and authority. An authorized agent may submit a request
        where permitted by law, but we may require proof of authorization and
        direct verification from you. We will respond within the time required
        by applicable law. You may update or remove on-device app data using app
        or device controls or by deleting the app.
      </p>
      <p>
        If you have an account, you can sign out or deactivate it from the app’s
        Settings. Deactivation is permanent: it stops sign-in and sync for that
        account. To have your account information, synced progress, or app usage
        events deleted, send a privacy request through the contact form using
        the email address on the account.
      </p>

      <h2>9. California disclosures</h2>
      <p>
        In the preceding 12 months, the categories of personal information we
        may have collected are identifiers (such as name, email address, account
        identifier, random app identifier, and IP address), commercial
        information (Premium subscription status), internet or other electronic
        network activity (including app usage events and listening and timer
        history), and the contents of communications you send us. We collect
        these categories from you, your device or browser, Apple, and our
        service providers. We use and disclose them for the business purposes
        described in Sections 3 and 4. We do not use or disclose sensitive
        personal information for purposes that require a right to limit under
        California law.
      </p>
      <p>
        We have not sold personal information or shared it for cross-context
        behavioral advertising in the preceding 12 months, including personal
        information of consumers we know are under 16. If the California
        Consumer Privacy Act applies to our processing, California residents may
        exercise the rights to know, access, correct, delete, and obtain
        information about collection and disclosure, as well as opt out of sale
        or sharing and limit certain uses of sensitive information. Because we
        do not currently sell or share personal information as those terms are
        defined by that law, we do not display a “Do Not Sell or Share” link.
      </p>

      <h2>10. European Economic Area, United Kingdom, and Switzerland</h2>
      <p>
        If data-protection law in the European Economic Area, United Kingdom, or
        Switzerland applies, LofiRain LLC is the controller of personal
        information described in this Policy. We process information as needed
        to provide the Service and respond to your requests; for our legitimate
        interests in securing, maintaining, and improving the Service and
        protecting legal rights; to comply with legal obligations; and with
        consent where required. You may object to processing based on legitimate
        interests, request restriction or portability, withdraw consent without
        affecting earlier processing, and lodge a complaint with your local
        data-protection authority. Information transferred outside your country
        will be handled using a lawful transfer mechanism where one is required.
      </p>

      <h2>11. Children’s privacy</h2>
      <p>
        The Service is not directed to children under 13, and we do not
        knowingly collect personal information from children under 13. A child
        under 13 should not submit a contact or takedown request. If you believe
        a child has provided personal information, contact us so we can review
        and delete it as required. If we learn that we collected covered
        information from a child without legally sufficient consent, we will
        take reasonable steps to delete it.
      </p>

      <h2>12. International use</h2>
      <p>
        LofiRain LLC is based in the United States. If you use the Service from
        another country, information processed through the app, website, or
        contact process may be transferred to and processed in the United States
        and other countries where our providers operate. Those countries may
        have different data-protection laws. We use legally required safeguards
        when applicable.
      </p>

      <h2>13. Changes to this Policy</h2>
      <p>
        We may update this Policy as the Service, our practices, or applicable
        law changes. We will post the revised Policy and update the date above.
        If a change materially expands how we use previously collected personal
        information, we will provide additional notice and obtain consent when
        required by law. We encourage you to review this page periodically.
      </p>

      <h2>14. Contact</h2>
      <p>
        For privacy questions, complaints, or rights requests, use our{" "}
        <a href="/takedown">contact form</a> and state clearly that your message
        concerns privacy rather than a music takedown request.
      </p>
    </LegalPage>
  );
}
