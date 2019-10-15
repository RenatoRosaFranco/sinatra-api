# seeds.rb
# @implemented

Book.destroy_all
Book.create([
	{
		name: 'Foundation', 
		author: 'Isaac Asimov', 
		isbn: '0553293354'
	},
	{
		name: 'Dune', 
		author: 'Frank Herbert', 
		isbn: '0441172717'
	},
	{
		name: 'Hyperion (Hyperion Cantos)', 
		author: 'Dan Simmons', 
		isbn: '0553283685'
	}
])