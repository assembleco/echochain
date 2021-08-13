Fabricator(:sign) do
  relay
  body { Faker::Markdown.sandwich }
end
