myapp.factory("bookservice",function(){
	var book=[
		{name:"book1",
		imageurl:"book.jpg",
		price:555,
		description:"this book is all about motivating the peaople who want to be motivated",
		author:"srikanth"
	},
	{imageurl:"book1.png",
		name:"book2",
		price:"333",
		description:"this book is all about motivating the peaople who want to be motivated",
		author:"shekar"
	},
	{imageurl:"book2.jpg",
		name:"book3",
		price:"666",
		description:"this book is all about motivating the peaople who want to be motivated",
		author:"prashanth"
	}];
	return {
		getbooks:function(){
			return book;
		}
	}
});