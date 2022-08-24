require 'stripe'
require 'sinatra'

# This is a public sample test API key.
# Don’t submit any personally identifiable information in requests made with this key.
# Sign in to see your own test API key embedded in code samples.
Stripe.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'

set :static, true
set :port, 4242

YOUR_DOMAIN = 'http://localhost:3000'

post '/create-checkout-session' do
  content_type 'application/json'

  session = Stripe::Checkout::Session.create({
    line_items: [{
      # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
      price: '{{PRICE_ID}}',
      quantity: 1,
    }],
    mode: 'payment',
    success_url: YOUR_DOMAIN + '?success=true',
    cancel_url: YOUR_DOMAIN + '?canceled=true',
  })
  redirect session.url, 303
end