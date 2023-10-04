Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost' # You can restrict the origins if needed
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
  end
end
