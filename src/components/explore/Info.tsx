type InfoData = {
    inclusions: string[];
    exclusions: string[];
    policies: {
        title: string;
        description: string;
    }[];
};

export function InfoSection({ data }: { data: InfoData }) {
    return (
        <section className="w-full py-16 px-6 max-w-6xl mx-auto">

            {/* TOP: Inclusions + Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Inclusions */}
                <div>
                    <h3 className="text-4xl font-bold mb-5">Inclusions</h3>

                    <ul className="space-y-2 text-gray-800">
                        {data.inclusions.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                                <span className="leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Exclusions */}
                <div>
                    <h3 className="text-4xl font-bold mb-5">Exclusions</h3>

                    <ul className="space-y-2 text-gray-800">
                        {data.exclusions.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500"></span>
                                <span className="leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            {/* POLICIES + LINE + LIST */}
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 mt-16">

                {/* LEFT HEADING */}
                <div>
                    <h3 className="text-4xl font-bold leading-tight">
                        Policies &<br />Informations
                    </h3>
                </div>

                {/* RIGHT SIDE LIST */}
                <div>

                    {/* Short Divider Line (only above points, small width) */}
                    <div className="border-t border-[#cfe0ea] w-full mb-6"></div>

                    {data.policies.map((policy, i) => (
                        <div key={i} className="mb-6">

                            {/* Dot + Title */}
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                                <span className="text-sm font-semibold text-gray-900">
                                    {policy.title}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-600 mt-1 ml-4">
                                {policy.description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}
