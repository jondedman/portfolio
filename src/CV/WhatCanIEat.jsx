import ToggleSection from "../ToggleSection";

function WhatCanIEat() {
	const handleClick = (event) => {
		event.stopPropagation();
		console.log("clicked in WhatCanIEat");
		// Add any additional click handling code here
	};
	return (
		<div
			className="overflow-y-auto h-full w-full p-6"
			onClick={handleClick}
			onMouseDown={handleClick}
		>
			<div className="mb-4">
				<a
					href="https://github.com/jondedman/what-can-i-eat"
					target="_blank"
					rel="noreferrer"
					className="active:text-skyBlue font-bold sm:text-md md:text-lg lg:text-xl text-seaShell"
				>
					What Can I Eat!? - Presentation for CoverageBook
					<svg
						className="h-6 w-6 inline-block ml-4 mb-2 animate-pulse hover:text-skyBlue transition-all duration-300 ease-in-out"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"
						/>
					</svg>
				</a>{" "}
			</div>

			{/* <a
				className="text-white underline"
				href="http://www.whatcanieat.world"
				target="_blank"
				rel="noopener noreferrer"
			>
				What Can I Eat!? - see it live on Heroku
			</a> */}
			<ToggleSection section="Brief">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold hover:text-skyBlue">Brief</h2>
						{openSection === "Brief" && (
							<>
							<ul className="list-disc list-inside">
								<li className="mb-2">
									What can I eat!? was the final collaborative project at Le Wagon bootcamp with my
									wonderful friends{" "}
									<a
										href="https://github.com/fransan6"
										target="_blank"
										rel="noreferrer"
										className="underline active:text-blue active:font-bold"
									>
										Francesca Sandford
									</a>
									,{" "}
									<a
										href="https://github.com/alexagodzilla"
										target="_blank"
										rel="noreferrer"
										className="underline active:text-blue active:font-bold"
									>
										Alessandro Agozzino
									</a>{" "}
									and{" "}
									<a
										href="https://github.com/ilariaperoni"
										target="_blank"
										rel="noreferrer"
										className="underline active:text-blue active:font-bold"
									>
										Ilaria Peroni
									</a>
								</li>
								<li className="mb-2">
								From concept to production, built in Ruby-on-Rails and deployed on Heroku.
								</li>

								<ul className="list-disc list-inside">
									<li className="mb-2">
										A full-stack web application designed to help users make use of leftover ingredients in their fridge.
									</li>
									<li className="mb-2">
										Allows users to search for recipes based on the ingredients they have, and also lets them save recipes to their profile.
									</li>
									<li className="mb-2">
										Users can see the contents of each other’s pantries and fridges, and meet in chatrooms to discuss what they could cook together.
									</li>
								</ul>
							</ul>
							</>

						)}
					</>
				)}
			</ToggleSection>
			<ToggleSection section="My contributions">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold hover:text-skyBlue">My Contributions</h2>
						{openSection === "My contributions" && (
							<ul className="list-disc list-inside">
								<li className="mb-2">
									Integrated the Spoonacular API to seed the app with data and create a Minimum Viable Product (MVP).
								</li>
								<li className="mb-2">
									concieved the social aspect of the app, allowing users to see each other's pantries and fridges, and meet in chatrooms to discuss what they could cook together.
								</li>
								<li className="mb-2">
									Contributed to the front-end design of the recipe show pages.
								</li>
								<li className="mb-2">
									Researched and implemented full-text search functionality using the pgSearch gem.
								</li>
							</ul>
						)}
					</>
				)}
			</ToggleSection>
			<ToggleSection section="Stack used">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold hover:text-skyBlue">Stack used</h2>
						{openSection === "Stack used" && (
							<ul className="list-disc list-inside">
								<li className="mb-2">Ruby on Rails</li>
								<li className="mb-2">HTML</li>
								<li className="mb-2">CSS</li>
								<li className="mb-2">JavaScript</li>
								<li className="mb-2">PostgreSQL</li>
								<li className="mb-2">Heroku</li>
								<li className="mb-2">Spoonacular API</li>
								<li className="mb-2">pg_search gem</li>
								<li className="mb-2">Bootstrap</li>
							</ul>
						)}
					</>
				)}
			</ToggleSection>
			<ToggleSection section="Challenges">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold hover:text-skyBlue">Challenges</h2>
						{openSection === "Challenges" && (
							<ul className="list-disc list-inside">
								<li className="mb-2">
									Finding an appropriate API was a challenge. The Spoonacular API was chosen because it was free and had a good range of recipes.
								</li>
								<li className="mb-2">
									The API was also easy to use and had good documentation.
								</li>
								<li className="mb-2">
									The API was used to seed the app with data. The data was stored in JSON files and then imported into the database.
								</li>
								<li className="mb-2">
									The biggest challenge was the full-text search functionality. I had to research and implement the pg_search gem. This was a challenge because it was the first time I had used this gem.
								</li>
								<li className="mb-2">
									After researching the different options, I decided that pg_search was going to be the quickest and most lightweight option to implement.
								</li>
								<li className="mb-2">
									The app could be further improved by sourcing better recipes and improving the front-end to make it fully responsive.
								</li>
							</ul>
						)}
					</>
				)}
			</ToggleSection>
			<ToggleSection section="Implementing Full-Text Search">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold hover:text-skyBlue">Implementing Full-Text Search</h2>
						{openSection === "Implementing Full-Text Search" && (
							<>

							<h3 className="mb-2 font-semibold">User journey</h3>
								<p className="mb-4">
									The user can enter a search query in the search bar, and the application will return relevant results based on the full-text search implementation.
								</p>
								<h3 className="mb-2 font-semibold">First steps</h3>
								<ul className="list-disc list-inside mb-4">
									<li className="mb-2">After trying to code it from scratch, researched various full-text search solutions and chose the pg_search gem for its simplicity and effectiveness.</li>
								</ul>

								<h4 className="mb-2 font-semibold">Key takeaways</h4>
								<ul className="list-disc list-inside mb-4">
									<li className="mb-2">The importance of choosing the right tool for the job.</li>
									<li className="mb-2">Don't re-invent the wheel.</li>
								</ul>

								<h3 className="mb-2 font-semibold">How was the gem implemented?</h3>
								<ul className="list-disc list-inside mb-4">
									<li className="mb-2">Added the pg_search gem to the Gemfile and installed it.</li>
									<li className="mb-2">Configured the recipe model to use pg_search for full-text search.</li>
									<pre className="bg-gray-100 p-4 rounded m-4 whitespace-pre-wrap text-left">
										<code>
											{`class Recipe < ApplicationRecord
	has_many :reviews, dependent: :destroy
	has_many :bookmarks, dependent: :destroy
	has_many :recipe_ingredients, dependent: :destroy
	has_many :ingredients, through: :recipe_ingredients
	has_many :steps, dependent: :destroy

	validates :title, uniqueness: true, presence: true
	validates :instructions, :total_time, :serving_size, :image_url, presence: true

	# Include PgSearch to enable search functionality
	include PgSearch::Model

	# Define the search scope
	# The search scope will search the title and instructions columns
	# using the tsearch prefix search method
	pg_search_scope :search_recipes,
	against: %i[title instructions],
	using: { tsearch: { prefix: true } }

	# Define the search scope for ordering recipes by average rating
	scope :order_by_average_rating_asc, -> { order(:average_rating) }
	scope :order_by_average_rating_desc, -> { order(average_rating: :desc) }

	# method to update the average rating of a recipe
	def update_average_rating
		update(average_rating: reviews.average(:rating))
	end
end`}
										</code>
									</pre>
									<li className="mb-2">Implemented the search functionality in the recipe controller.</li>
									<pre className="bg-gray-100 p-4 rounded m-4 whitespace-pre-wrap text-left">
										<code>
											{`class RecipesController < ApplicationController

  # The index action handles different search scenarios and displays the search results accordingly.

  def index
    if params[:query].present?
      # If a query is present, search wth or without an ingredient_id
      params[:ingredient_id].present? ? search(params[:query], params[:ingredient_id]) : search(params[:query])

    elsif params[:ingredient_id].present?
      # If only an ingredient_id is present, search with an empty query
      search("", params[:ingredient_id])

    elsif params.values.include?("1") && params[:query].empty?
      # if any filter parameter is set to "1" and the query is empty, search with an empty query
      empty_query

    else
      # If no query or ingredient_id is present, display all recipes
      @recipes = Recipe.where(id: popular_recipes_ids)
    end
  end

  # The show action displays the details of a single recipe.
  def show
    @chatroom = Chatroom.first
    @bookmark = Bookmark.new
    @review = Review.new
    @recipe = Recipe.find(params[:id])
    @user_bookmarks = Bookmark.where(user: current_user)
    @friendship = Friendship.new
  end

  private

  # The search method is used to search for recipes based on the query and ingredient_id.
  # It also filters the search results based on the selected filters.
  def search(params_query, user_ingredient = "")
    user_ingredient.map! { |id| Ingredient.find(id).name }.join(" ") if user_ingredient.length.positive?

    if params.values.include?("1")
      # If any filter parameter is set to "1", filter the search results based on the selected filters
      arr = params.select { |_key, value| value == "1" }.keys
      @recipes = Recipe.search_recipes("#{params_query} #{user_ingredient}").where(arr.to_h { |key| [key, true] })

    else
      # If no filter parameter is set to "1", display all search results
      @recipes = Recipe.search_recipes("#{params_query} #{user_ingredient}")
    end
  end

  # The empty_query method is used to search for recipes based on the selected filters when no query is present.
  def empty_query
    arr = params.select { |_key, value| value == "1" }.keys
    @recipes = Recipe.where(arr.to_h { |key| [key, true] })
  end

  # The popular_recipes_ids method returns an array of recipe ids for popular recipes. This could be refactored to use a scope too.
  def popular_recipes_ids
    Recipe.where(title: "Easy Eggplant Curry").pluck(:id) +
      Recipe.where(title: "Dolsot Bibimbap").pluck(:id) +
      Recipe.where(title: "Smokey Rainbow Chili").pluck(:id) +
      Recipe.where(title: "Vietnamese Pancakes with Vegetables, Herbs and a Fragrant Dipping Sauce (Bánh Xèo)").pluck(:id) +
      Recipe.where(title: "Super Speedy Spicy Sweet and Sour Shrimp").pluck(:id) +
      Recipe.where(title: "Spaghetti Squash & Tomato Basil Meat Sauce").pluck(:id) +
      Recipe.where(title: "Caldo Verde - Portuguese Kale Soup").pluck(:id) +
      Recipe.where(title: "Grilled Fish With Sun Dried Tomato Relish").pluck(:id)
  end
end`}
										</code>
									</pre>
									<li className="mb-2">Displayed the search results in the view.</li>
									<pre className="bg-gray-100 p-2 rounded mb-4">
										<code>
											{`# Recipes are displayed according to the search results from the controller

<% @recipes.each do |recipe| %>
  <div class="w-full inline-block">
		<%= render "shared/cards", recipe: recipe %>
<% end %>
  </div>`}
										</code>
									</pre>
								</ul>
								<h3 className="mb-2 font-semibold">Flow through the application</h3>
								<p className="mb-4">
									The user enters a search query via a form in the index, the query is processed by the controller, the pg_search gem performs the search in the model, and the results are displayed in the view.
								</p>
							</>
						)}
					</>
				)}
			</ToggleSection>
			<ToggleSection section="Success?">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold hover:text-skyBlue">Success?</h2>
						{openSection === "Success?" && (
							<ul className="list-disc list-inside">
								<li className="mb-2">Overall, the project was a success.</li>
								<li className="mb-2">The design and look of the app could definitely have been better.</li>
								<li className="mb-2">I sometimes felt the team could have been better organized.</li>
								<li className="mb-2">
									But we formed a strong team bond. And our sense of fun and camaraderie meant we were able to work through problems together.
								</li>
								<li className="mb-2">
									I felt the social element of our app really was a USP and tied everything together. Having full-text search plus chat functionality made the app unique and interesting.
								</li>
							</ul>
						)}
					</>
				)}
			</ToggleSection>

			<ToggleSection section="What I learned from working on the project">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold hover:text-skyBlue">What I learned from working on the project</h2>
						{openSection === "What I learned from working on the project" && (
							<ul className="list-disc list-inside">
								<li className="mb-2">Not to reinvent the wheel - using libraries and gems.</li>
								<li className="mb-2">How to create an MVP for showcase.</li>
								<li className="mb-2">Ways to boost morale in the team.</li>
								<li className="mb-2">How to ask for help.</li>
								<li className="mb-2">How to embrace different ways of working and adapt to a team to keep the stronger parts.</li>
								<li className="mb-2">A solid understanding of the MVC design pattern.</li>
								<li className="mb-2">An appreciation for how Rails abstracts a lot of the difficulty away from developing a project, especially when my first solo project used different software for the front and back end.</li>
							</ul>
						)}
					</>
				)}
			</ToggleSection>

			<ToggleSection section="Areas where I was weak and would have liked to contribute more">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold hover:text-skyBlue">Areas where I was weak and would have liked to contribute more</h2>
						{openSection === "Areas where I was weak and would have liked to contribute more" && (
							<ul className="list-disc list-inside">
								<li className="mb-2">Front end - my work here was not as extensive. I helped with the layout but was not very hands-on with the design.</li>
								<li className="mb-2">My OTT buttons were shot down.</li>
								<li className="mb-2">Working on improving my front-end sensibilities.</li>
								<li className="mb-2">I felt in our group my code reviews could have been better.</li>
								<li className="mb-2">I would like to have spoken up more. The code reviews were more of a tick box exercise for our group. I would like to have changed that more.</li>
							</ul>
						)}
					</>
				)}
			</ToggleSection>

			<ToggleSection section="Things I am personally proud of">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold hover:text-skyBlue">Things I am personally proud of</h2>
						{openSection === "Things I am personally proud of" && (
							<ul className="list-disc list-inside">
								<li className="mb-2">The social aspect of the app.</li>
								<li className="mb-2">The full-text search functionality.</li>
								<li className="mb-2">The team bond we formed.</li>
								<li className="mb-2">The MVP we created.</li>
								<li className="mb-2">My contributions to fixing bugs and implementing new features.</li>
								<li className="mb-2">The coding and teamwork skills I developed</li>
							</ul>
						)}
					</>
				)}
			</ToggleSection>
			<ToggleSection section="What I did next">
				{(openSection) => (
					<>
						<h2 className="mb-2 text-center cursor-pointer font-bold hover:text-skyBlue">What I did next</h2>
						{openSection === "What I did next" && (
							<>
								<ul className="list-disc list-inside">
									<li className="mb-2">Developed a front-end heavy implementation of the board game Jaipur using Rails.</li>
									<li className="mb-2">Learned React and Tailwind</li>
									<li className="mb-2">Created a booking system for RD Autos using the PERN stack.</li>
									<li className="mb-2">Experimented with Rails and WebSockets in the Jaipur project.</li>
									<li className="mb-2">Enhanced teamwork skills by volunteering on a mobile app for Autistic learners.</li>
									<li className="mb-2">Maintained stability by fixing breaking versions of the app, despite being a junior team member.</li>
									<li className="mb-2">Explored Python, JavaScript, and Java, appreciating Ruby's simplicity while becoming more language agnostic.</li>
									<li className="mb-2">Optimised Python project for QMU</li>
									<li className="mb-2">Developed a web scraper for a band's contact list</li>
									<li className="mb-2">Expanded knowledge in web scraping, API integration, and automation.</li>
									<li className="mb-2">Developed several websites including this portfolio site and a site for JIVE spin-out group at QMU</li>
									<li className="mb-2">Improved efficiency for a band by scraping contact lists from a site without an API, generating mail lists for clients.</li>
								</ul>
							</>
						)}
					</>
				)}
			</ToggleSection>
		</div>
	);
}

export default WhatCanIEat;
