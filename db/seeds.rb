# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# You can remove the 'faker' gem if you don't want Decidim seeds.

Decidim.seed! if Decidim::Organization.count.zero?

# Custom Organization
organization = Decidim::Organization.first

return if organization.name == 'Sabadell'

general_handler = 'sabadell_city'
udpate_data = {
  name: 'Sabadell',
  twitter_handler: general_handler,
  facebook_handler: general_handler,
  instagram_handler: general_handler,
  youtube_handler: general_handler,
  github_handler: 'sbrocos',
  # in local don't change it because if change localhost, doesn't run correctly
  host: ENV.fetch("DECIDIM_HOST", "localhost"),
}

organization.update(udpate_data) 
puts 'Organization updated.'

