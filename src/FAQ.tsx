import React from "react";

const FAQ = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h1>
        </div>
        <details className="w-10/12 md:w-1/2 mx-auto leading-relaxed text-base text-black my-2 pl-4 bg-gray-100 rounded">
          <summary className="text-lg font-semibold cursor-pointer py-2">
            What is a URL shortener?
          </summary>
          <p className="pb-2 pl-4">
            A URL shortener is a service that takes a long URL and converts it
            into a shorter, more manageable link. This can make it easier to
            share links on social media or in messaging apps, and can also help
            to hide the true destination of a link.
          </p>
        </details>
        <details className="w-10/12 md:w-1/2 mx-auto leading-relaxed text-base text-black my-2 pl-4 bg-gray-100 rounded">
          <summary className="text-lg font-semibold cursor-pointer py-2">
            How do I use a URL shortener?
          </summary>
          <p className="pb-2 pl-4">
            To use a URL shortener, you typically enter the long URL into a
            form, and then the website will provide you with a shortened version
            of the link. You can then share this shortened link with others.
          </p>
        </details>
        <details className="w-10/12 md:w-1/2 mx-auto leading-relaxed text-base text-black my-2 pl-4 bg-gray-100 rounded">
          <summary className="text-lg font-semibold cursor-pointer py-2">
            Can I use Merged to shorten multiple URLs into one short URL?{" "}
          </summary>
          <p className="pb-2 pl-4">
            Yes. Merged feature allows you to combine multiple URLs into one
            short URL, and the user will be prompted appropriate URL according
            to his device.
            <br /> For example, if you combine google play store url, apple app
            store url and URL of a landing page, then desktop users will be
            redirected to the landing page and for mobile operating systems the
            user will be redirected to their respective app store.
          </p>
        </details>
        <details className="w-10/12 md:w-1/2 mx-auto leading-relaxed text-base text-black my-2 pl-4 bg-gray-100 rounded">
          <summary className="text-lg font-semibold cursor-pointer py-2">
            Can I customize my shortened links?
          </summary>
          <p className="pb-2 pl-4">
            Yes. You can create short url using your own domain name. Also you
            can create vanity URLs to show your short urls more familiar with
            your brand.
          </p>
        </details>
        <details className="w-10/12 md:w-1/2 mx-auto leading-relaxed text-base text-black my-2 pl-4 bg-gray-100 rounded">
          <summary className="text-lg font-semibold cursor-pointer py-2">
            Will a shortened link generated on Merged expire?
          </summary>
          <p className="pb-2 pl-4">
            No. Url's generated on Merged do not expire. They will always be
            active. But you can expire a url after defined time if you create
            time-sensitive promotions or campaigns.
          </p>
        </details>
        <details className="w-10/12 md:w-1/2 mx-auto leading-relaxed text-base text-black my-2 pl-4 bg-gray-100 rounded">
          <summary className="text-lg font-semibold cursor-pointer py-2">
            Can I generate QR code for short URLs?
          </summary>
          <p className="pb-2 pl-4">
            Yes. You can generate customized QR code with different styles and
            colors as you need.
          </p>
        </details>
        <details className="w-10/12 md:w-1/2 mx-auto leading-relaxed text-base text-black my-2 pl-4 bg-gray-100 rounded">
          <summary className="text-lg font-semibold cursor-pointer py-2">
            Can I create campaigns?
          </summary>
          <p className="pb-2 pl-4">
            Yes. You can create multiple campaigns and track the performance of
            your campaign.
          </p>
        </details>
        <details className="w-10/12 md:w-1/2 mx-auto leading-relaxed text-base text-black my-2 pl-4 bg-gray-100 rounded">
          <summary className="text-lg font-semibold cursor-pointer py-2">
            How URL analytics works?
          </summary>
          <p className="pb-2 pl-4">
            Analytics will provide you detailed information about your short
            URLs on different metric like operating system, geo-location, QR
            code scans, etc. This will help you understand the performance of
            your campaigns and can help you change your campaigns strategy if
            needed.
          </p>
        </details>
      </div>
    </section>
  );
};

export default FAQ;
