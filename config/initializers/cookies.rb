# Be sure to restart your server when you modify this file.

# Configuration for new cookies
Rails.application.config.cookies = [
  {
      name: "matomo",
      title: "Matomo",
      cookies: %w(matomo_session pk_id pk_ses _pk_ref _pk_cvar),
      purposes: %w(tracking analytics)
  }
]