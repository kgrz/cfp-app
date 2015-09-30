admins = []
admins << Person.create(name: "Swanand", email: "swanand@pagnis.in", admin: true)
admins << Person.create(name: "Leena", email: "leenasn@gmail.com", admin: true)
admins << Person.create(name: "Emil", email: "emil.soman@gmail.com", admin: true)

admins.each do |admin|
  admin.services.create(provider: "developer", uid: admin.email, uname: admin.name, uemail: admin.email)
end
