Fabricator(:person) do
  name { Faker::Name.name }
  handle { |attrs| Faker::Internet.username(specifier: attrs[:name]) }
  email { |attrs| Faker::Internet.email(name: attrs[:name]) }
end
