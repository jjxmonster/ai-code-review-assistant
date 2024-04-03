export const Header = () => {
	return (
		<div>
			<section className="w-full py-12 md:py-24 ">
				<div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Code Review Assistant
						</h1>
						<p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Automate your code review process and save time for more important
							tasks.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};
