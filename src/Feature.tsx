import {
  BoltIcon,
  ClipboardDocumentListIcon,
  FolderOpenIcon,
  GlobeAltIcon,
  LinkIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export const features = [
  {
    name: "Merge Links",
    description:
      "Merge multiple links to create single shareable link and appropriate link will open according to device",
    icon: LinkIcon,
    background: "primary-normal",
  },
  {
    name: "Custom domain",
    description:
      "Create links using your domains to ensure the user that he is navigating to valid website ",
    icon: GlobeAltIcon,
    background: "secondary-green",
  },
  {
    name: "AI Powered Analytics",
    description: "Get AI powered performance analytics and recommendations",
    icon: BoltIcon,
    background: "secondary-yellow",
  },
  {
    name: "Campaign Management:",
    description:
      "Easily Create, Track and Optimize Your Marketing Campaigns. Schedule and automate your campaigns",
    icon: ClipboardDocumentListIcon,
    background: "primary-normal",
  },
  {
    name: "Advanced & secure Link Tracking",
    description:
      "Track clicks, location, and referral data to get a complete picture of your link's performance.",
    icon: ShieldCheckIcon,
    background: "secondary-green",
  },
  {
    name: "Link Management",
    description:
      "Easily manage all of your links in one convenient place with our user-friendly link management system.",
    icon: FolderOpenIcon,
    background: "secondary-yellow",
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          {/* <h2 className="text-lg font-semibold leading-8 text-primary-normal">
            FEATURES
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Features
          </p>
          {/* <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p> */}
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
            {!!features &&
              features.map(feature => (
                <div
                  key={feature.name}
                  className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row animate-[come 1s ease-in 2sec]"
                >
                  {feature.background && (
                    <>
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${feature.background} text-white sm:shrink-0 drop-shadow-xl`}
                      >
                        <feature.icon
                          className="h-8 w-8 animate-[wiggle_1s_ease-in-out_infinite]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-lg font-semibold leading-8 text-primary-dark ">
                          {feature.name}
                        </p>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
