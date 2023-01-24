import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ChartBarIcon,
  ClipboardDocumentIcon,
  FolderOpenIcon,
  LinkIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import Conversion from "../src/assets/images/Conversion-rate-optimization-green.gif";
import Business from "../src/assets/images/Data-extraction-yellow.gif";
import SiteStat from "../src/assets/images/site-stat-purple.gif";

export default function Why() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          {/* <h2 className="text-lg font-semibold leading-8 text-indigo-600">
          WHY MERGED
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            WHY MERGED
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row ">
              <div className="sm:min-w-0 sm:flex-1 h-max self-center">
                <p className="text-3xl font-bold leading-8 text-gray-900">
                  Perfect for sales and marketing
                </p>
                <p className="mt-2 mb-4 text-base leading-7 text-gray-600">
                  A short link so powerful tool when you use it carefully. It is
                  a medium between your customer and their destinations. A short
                  link allows you to collect much data about your customers and
                  their behaviors.
                  <ul className="list-disc mt-6 text-base">
                    <li className="flex items-center mb-4">
                      <div className="flex h-10 w-10 mr-4  items-center justify-center rounded-lg bg-primary-normal text-white sm:shrink-0 drop-shadow-xl">
                        <FolderOpenIcon className="h-6 w-6" />
                      </div>
                      <p>Target. Re-target</p>
                    </li>
                    <li className="flex items-center mb-4">
                      <div className="flex h-10 w-10 mr-4  items-center justify-center rounded-lg bg-secondary-yellow text-white sm:shrink-0 drop-shadow-xl">
                        <ChartBarIcon className="h-6 w-6" />
                      </div>
                      <p>Powerful Statistics</p>
                    </li>
                    <li className="flex items-center mb-4">
                      <div className="flex h-10 w-10 mr-4  items-center justify-center rounded-lg bg-secondary-green text-white sm:shrink-0 drop-shadow-xl">
                        <ShieldCheckIcon className="h-6 w-6" />
                      </div>
                      <p>Secure Links</p>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="relative flex flex-col-reverse gap-6 sm:flex-row md:flex-col lg:flex-row">
              <div className="sm:min-w-0 sm:flex-1  ">
                <img src={Business} alt="" />
              </div>
            </div>
            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
              <div className=" sm:min-w-0 sm:flex-1 ">
                <img src={SiteStat} alt="" />
              </div>
            </div>
            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
              <div className="sm:min-w-0 sm:flex-1 h-max self-center">
                <p className="text-3xl font-bold leading-8 text-gray-900">
                  Powerful tools that works
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Our platform lets you targeting your users to better
                  understand their behavior and provide them a better overall
                  experience through smart re-targeting. We provide you amy
                  powerful tools to reach them better.
                </p>
                <ul className="list-disc mt-6 text-base">
                  <li className="flex items-center mb-4">
                    <div className="flex h-10 w-10 mr-4  items-center justify-center rounded-lg bg-primary-normal text-white sm:shrink-0 drop-shadow-xl">
                      <FolderOpenIcon className="h-6 w-6" />
                    </div>
                    <p>Powerful Dashboard</p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="flex h-10 w-10 mr-4  items-center justify-center rounded-lg bg-secondary-yellow text-white sm:shrink-0 drop-shadow-xl">
                      <ArrowPathIcon className="h-6 w-6" />
                    </div>
                    <p>Always In Sync</p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="flex h-10 w-10 mr-4  items-center justify-center rounded-lg bg-secondary-green text-white sm:shrink-0 drop-shadow-xl">
                      <UserGroupIcon className="h-6 w-6" />
                    </div>
                    <p>Collaborate with team members</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
              <div className="sm:min-w-0 sm:flex-1 h-max self-center">
                <p className="text-3xl font-bold leading-8 text-gray-900">
                  Optimize your marketing strategy
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  A short link so powerful tool when you use it carefully. It is
                  a medium between your customer and their destinations. A short
                  link allows you to collect much data about your customers and
                  their behaviors.
                </p>
                <ul className="list-disc mt-6 text-base">
                  <li className="flex items-center mb-4">
                    <div className="flex h-10 w-10 mr-4  items-center justify-center rounded-lg bg-primary-normal text-white sm:shrink-0 drop-shadow-xl">
                      <ClipboardDocumentIcon className="h-6 w-6" />
                    </div>
                    <p>Campaign Management</p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="flex h-10 w-10 mr-4  items-center justify-center rounded-lg bg-secondary-yellow text-white sm:shrink-0 drop-shadow-xl">
                      <AdjustmentsHorizontalIcon className="h-6 w-6" />
                    </div>
                    <p>In-depth Analysis</p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="flex h-10 w-10 mr-4  items-center justify-center rounded-lg bg-secondary-green text-white sm:shrink-0 drop-shadow-xl">
                      <LinkIcon className="h-6 w-6" />
                    </div>
                    <p>Controlled links</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
              <div className="sm:min-w-0 sm:flex-1">
                <img src={Conversion} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
