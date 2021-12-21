(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var a=i(9),n=i.n(a),s=(i(17),i(12)),r=i(3),c=i(4),l=i(7),o=i(6),m=i(1),d=i.n(m),h=(i(18),i(2)),j=(i(19),i(20),i(0)),b=function(e){var t=e.title,i=e.description,a=e.imgUrl,n=e.imdbUrl;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image is-4by3",children:Object(j.jsx)("img",{src:a,alt:"Film logo"})})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("div",{className:"media-left",children:Object(j.jsx)("figure",{className:"image is-48x48",children:Object(j.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(j.jsx)("div",{className:"media-content",children:Object(j.jsx)("p",{className:"title is-8",children:t})})]}),Object(j.jsxs)("div",{className:"content",children:[i,Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:n,children:"IMDB"})]})]})]})},p=function(e){var t=e.movies;return Object(j.jsx)("div",{className:"movies",children:t.map((function(e){return Object(j.jsx)(b,Object(h.a)({},e),e.imdbId)}))})},u=i(5),g=(i(22),function(e){Object(l.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={newMovie:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}},e.changeHandler=function(t){var i=t.target,a=i.name,n=i.value;e.setState((function(e){return{newMovie:Object(h.a)(Object(h.a)({},e.newMovie),{},Object(u.a)({},a,n.trimLeft()))}}))},e.handleSubmit=function(t){t.preventDefault(),e.props.addNewMovie(e.state.newMovie)},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.newMovie,t=e.title,i=e.description,a=e.imdbUrl,n=e.imgUrl,s=e.imdbId;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{className:"form__input",type:"text",name:"title",placeholder:"title",value:t,onChange:this.changeHandler,required:!0}),Object(j.jsx)("input",{className:"form__input",type:"text",name:"description",placeholder:"description",value:i,onChange:this.changeHandler}),Object(j.jsx)("input",{className:"form__input",type:"text",name:"imdbUrl",placeholder:"imdbUrl",value:a,onChange:this.changeHandler,required:!0}),Object(j.jsx)("input",{className:"form__input",type:"text",name:"imgUrl",placeholder:"imgUrl",value:n,onChange:this.changeHandler,required:!0}),Object(j.jsx)("input",{className:"form__input",type:"text",name:"imdbId",placeholder:"imdbId",value:s,onChange:this.changeHandler,required:!0}),Object(j.jsx)("button",{type:"submit",children:"Add"})]})})}}]),i}(m.Component)),v=i(11),O=function(e){Object(l.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page-content",children:Object(j.jsx)(p,{movies:e})}),Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsx)(g,{addNewMovie:this.addMovie})})]})}}]),i}(d.a.Component);n.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b8a2019a.chunk.js.map