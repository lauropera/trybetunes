(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(24),s=a.n(r),i=(a(32),a(3)),o=a(4),u=a(5),l=a(6),d=a(8),j=a(2),b=a(7),h=(a(33),a(0)),m=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Loading wave-bottom",children:Object(h.jsx)("h2",{children:"Carregando..."})})}}]),a}(n.Component),O=m,f=a(10),p="user",v=function(e){return localStorage.setItem(p,JSON.stringify(e))},x=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},g=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(p));null===t&&(t={}),x(t)(e)}))},k=function(e){return new Promise((function(t){v(Object(f.a)(Object(f.a)({},{name:"",email:"",image:"",description:""}),e)),x("OK")(t)}))},S=function(e){return new Promise((function(t){v(Object(f.a)({},e)),x("OK")(t)}))},N=(a(35),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target.value;e.setState({username:a,isLoginDisabled:a.length<3})},e.loadUserInfo=function(){var t=Object(b.a)(Object(j.a)().mark((function t(a){var n;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state.username,e.setState({isLoading:!0}),t.next=5,k({name:n});case 5:e.redirectToSearchPage();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.redirectToSearchPage=function(){(0,e.props.history.push)("/search")},e.state={username:"",isLoading:!1,isLoginDisabled:!0},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.isLoginDisabled,n=e.isLoading;return Object(h.jsx)("div",{"data-testid":"page-login",className:"Login-Page wave-header",children:n?Object(h.jsx)(O,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"TrybeTunes"}),Object(h.jsxs)("form",{className:"Login-Form",children:[Object(h.jsxs)("label",{htmlFor:"name-input",children:[" ",Object(h.jsx)("input",{type:"text",id:"name-input","data-testid":"login-name-input",value:t,onChange:this.handleChange,placeholder:"Nome de usu\xe1rio"})]}),Object(h.jsx)("div",{className:"Button-Login",children:Object(h.jsx)("button",{type:"submit","data-testid":"login-submit-button",disabled:a,onClick:this.loadUserInfo,children:"Entrar"})})]})]})})}}]),a}(n.Component)),C=N,w=a(18),y=function(){var e=Object(b.a)(Object(j.a)().mark((function e(t){var a,n,c,r,s,i;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=encodeURI(t).replaceAll("%20","+"),n="https://itunes.apple.com/search?entity=album&term=".concat(a,"&attribute=allArtistTerm"),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,s=r.results,i=s.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=y,F=a(11),L=(a(36),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.artist,a=e.albums;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"Artist-Search",children:Object(h.jsx)("p",{children:"Resultado de \xe1lbuns de: ".concat(t)})}),Object(h.jsx)("div",{className:"Artist-Albums",children:a.map((function(e){var t=e.artistName,a=e.collectionId,n=e.collectionName,c=e.artworkUrl100;return Object(h.jsx)(F.b,{to:"/album/".concat(a),"data-testid":"link-to-album-".concat(a),className:"Song",children:Object(h.jsxs)("section",{className:"Song-Info",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:c,alt:n})}),Object(h.jsxs)("div",{className:"Artist-Song",children:[Object(h.jsx)("h3",{children:n}),Object(h.jsx)("p",{children:t})]})]})},a)}))})]})}}]),a}(n.Component)),P=L,A=(a(45),a.p+"static/media/default-user.347d90fa.svg"),U=(a(46),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getUserInfo=Object(b.a)(Object(j.a)().mark((function t(){var a;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:a=t.sent,e.setState({userInfo:a,isLoading:!1});case 4:case"end":return t.stop()}}),t)}))),e.state={userInfo:{},isLoading:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"render",value:function(){var e=this.state,t=e.userInfo,a=t.name,n=t.image,c=e.isLoading;return Object(h.jsx)("header",{"data-testid":"header-component",className:"Header wave-header",children:c?Object(h.jsx)("h1",{children:"Carregando..."}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"User-Informations",children:[Object(h.jsx)(F.b,{to:"/profile",className:"Link-Picture",children:Object(h.jsx)("img",{src:n||A,alt:"User ".concat(a),className:"Header-Pic"})}),Object(h.jsx)(F.b,{to:"/profile",className:"Link-Name",children:Object(h.jsx)("p",{"data-testid":"header-user-name",children:a})})]}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"Links",children:[Object(h.jsx)(F.b,{"data-testid":"link-to-search",to:"/search",className:"Link",children:Object(h.jsx)("li",{children:"Busca"})}),Object(h.jsx)(F.b,{"data-testid":"link-to-favorites",to:"/favorites",className:"Link",children:Object(h.jsx)("li",{children:"Curtidas"})}),Object(h.jsx)(F.b,{"data-testid":"link-to-profile",to:"/profile",className:"Link",children:Object(h.jsx)("li",{children:"Perfil"})})]})})]})})}}]),a}(n.Component)),D=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target;e.setState({userSearch:a.value})},e.getAlbums=function(){var t=e.state.userSearch;e.setState({artist:t,isLoading:!0,userSearch:""},Object(b.a)(Object(j.a)().mark((function t(){var a;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.artist,t.t0=e,t.next=4,I(a);case 4:t.t1=t.sent,t.t2={isLoading:!1,artistFound:!0,artistAlbums:t.t1},t.t0.setState.call(t.t0,t.t2);case 7:case"end":return t.stop()}}),t)}))))},e.state={userSearch:"",artist:"",artistAlbums:[],isLoading:!1,artistFound:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.userSearch,a=e.artist,n=e.artistAlbums,c=e.artistFound;return e.isLoading?Object(h.jsx)(O,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(U,{}),Object(h.jsxs)("section",{"data-testid":"page-search",className:"Search-Container wave-bottom",children:[Object(h.jsxs)("form",{className:"Search-Form",onSubmit:this.getAlbums,children:[Object(h.jsx)("label",{htmlFor:"search-artist",children:Object(h.jsx)("input",{type:"text",id:"search-artist",placeholder:"Artistas","data-testid":"search-artist-input",value:t,onChange:this.handleChange})}),Object(h.jsx)("button",{type:"button","data-testid":"search-artist-button",disabled:t.length<2,onClick:this.getAlbums,children:Object(h.jsx)(w.c,{})})]}),c&&Object(h.jsx)("main",{className:"Albums-List wave-bottom",children:n.length>0?Object(h.jsx)(P,{artist:a,albums:n}):Object(h.jsx)("p",{children:"Nenhum \xe1lbum foi encontrado"})})]})]})}}]),a}(n.Component),T=a(15),E=(a(47),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.music,a=t.trackId,n=t.trackName,c=t.previewUrl,r=e.music,s=e.handleChange,i=e.favSongsChecked;return Object(h.jsxs)("section",{className:"Album-Song",children:[Object(h.jsx)("div",{className:"Track-Name",children:Object(h.jsx)("h3",{children:n})}),Object(h.jsxs)("div",{className:"Audio-and-Fav",children:[Object(h.jsxs)("audio",{"data-testid":"audio-component",src:c,controls:!0,children:[Object(h.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento"," ",Object(h.jsx)("code",{children:"audio"}),"."]}),Object(h.jsxs)("label",{htmlFor:a,children:[Object(h.jsx)("input",{id:a,name:a,type:"checkbox","data-testid":"checkbox-music-".concat(a),checked:!!i[a],onChange:function(e){return s(e,r)},className:"Fav-Checkbox"}),i[a]?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{children:"Favorita"}),Object(h.jsx)(w.a,{className:"Fav"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{children:"Favorita"}),Object(h.jsx)(w.b,{className:"Fav"})]})]})]})]},a)}}]),a}(n.Component)),J=E,B=a(27),M="favorite_songs";JSON.parse(localStorage.getItem(M))||localStorage.setItem(M,JSON.stringify([]));var H=function(){return JSON.parse(localStorage.getItem(M))},R=function(e){return localStorage.setItem(M,JSON.stringify(e))},K=function(e){return function(t){setTimeout((function(){t(e)}),500)}},q=function(){return new Promise((function(e){var t=H();K(t)(e)}))},V=function(e){return new Promise((function(t){if(e){var a=H();R([].concat(Object(B.a)(a),[e]))}K("OK")(t)}))},_=function(e){return new Promise((function(t){var a=H();R(a.filter((function(t){return t.trackId!==e.trackId}))),K("OK")(t)}))},z=function(){var e=Object(b.a)(Object(j.a)().mark((function e(t){var a,n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=z,Q=(a(48),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t,a){var n=t.target,c=n.name,r=n.checked;e.setState((function(e){var t=e.favSongsChecked;return{loadingFav:!0,favSongsChecked:Object(f.a)(Object(f.a)({},t),{},Object(T.a)({},c,r))}}),Object(b.a)(Object(j.a)().mark((function t(){return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.addOrRemoveFav(r,a);case 2:e.setState({loadingFav:!1});case 3:case"end":return t.stop()}}),t)}))))},e.addOrRemoveFav=function(){var e=Object(b.a)(Object(j.a)().mark((function e(t,a){return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,V(a);case 3:if(t){e.next=6;break}return e.next=6,_(a);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e.loadSongs=Object(b.a)(Object(j.a)().mark((function t(){var a,n;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match.params.id,t.next=3,G(a);case 3:n=t.sent,e.setState({album:n,loadingFav:!1,successfulLoading:!0});case 5:case"end":return t.stop()}}),t)}))),e.loadFavoriteSongs=Object(b.a)(Object(j.a)().mark((function t(){return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:t.sent.forEach((function(t){var a=t.trackId;e.setState((function(e){var t=e.favSongsChecked;return{favSongsChecked:Object(f.a)(Object(f.a)({},t),{},Object(T.a)({},a,!0))}}))}));case 4:case"end":return t.stop()}}),t)}))),e.state={album:[],loadingFav:!0,favSongsChecked:{},successfulLoading:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadSongs(),this.loadFavoriteSongs()}},{key:"render",value:function(){var e=this,t=this.state,a=t.album,n=t.loadingFav,c=t.favSongsChecked,r=t.successfulLoading;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(U,{}),Object(h.jsx)("div",{"data-testid":"page-album",className:"Album-Container wave-bottom",children:r&&Object(h.jsxs)("main",{className:"Album wave-bottom",children:[Object(h.jsxs)("div",{className:"Album-Informations",children:[Object(h.jsx)("img",{src:a[0].artworkUrl100,alt:"Album cover art"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{"data-testid":"album-name",children:a[0].collectionName}),Object(h.jsx)("p",{"data-testid":"artist-name",children:a[0].artistName})]})]}),Object(h.jsx)("div",{className:"Songs",children:n?Object(h.jsx)(O,{}):Object(h.jsx)(h.Fragment,{children:a.slice(1).map((function(t){return Object(h.jsx)(J,{music:t,handleChange:e.handleChange,favSongsChecked:c},t.trackId)}))})})]})})]})}}]),a}(n.Component)),W=Q,X=(a(49),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t,a){var n=t.target,c=n.name,r=n.checked;e.setState((function(e){var t=e.favSongsChecked;return{isLoading:!0,favSongsChecked:Object(f.a)(Object(f.a)({},t),{},Object(T.a)({},c,r))}}),Object(b.a)(Object(j.a)().mark((function t(){return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(a);case 2:e.showFavSongs();case 3:case"end":return t.stop()}}),t)}))))},e.showFavSongs=Object(b.a)(Object(j.a)().mark((function t(){var a,n;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:a=t.sent,n=a.map((function(e){return[e.trackId,!0]})),e.setState({favoriteSongs:a,favSongsChecked:Object.fromEntries(n),isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e.state={isLoading:!0,favoriteSongs:[],favSongsChecked:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.showFavSongs()}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.favoriteSongs,c=t.favSongsChecked;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(U,{}),Object(h.jsxs)("section",{className:"Favorites wave-bottom","data-testid":"page-favorites",children:[Object(h.jsx)("div",{className:"Category-Header",children:Object(h.jsx)("h2",{children:"Suas curtidas"})}),a?Object(h.jsx)(O,{}):Object(h.jsx)("div",{className:"Fav-Container",children:0===n.length?Object(h.jsx)("h2",{children:"Voc\xea n\xe3o tem nenhuma curtida!"}):n.map((function(t){return Object(h.jsx)(J,{music:t,handleChange:e.handleChange,favSongsChecked:c},t.trackId)}))})]})]})}}]),a}(n.Component)),Y=(a(50),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).fetchUser=Object(b.a)(Object(j.a)().mark((function t(){var a;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),t.next=3,g();case 3:a=t.sent,e.setState({userInfo:Object(f.a)({},a),isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e.state={userInfo:{},isLoading:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"render",value:function(){var e=this.state,t=e.userInfo,a=e.isLoading,n=t.name,c=t.email,r=t.image,s=t.description;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(U,{}),Object(h.jsxs)("section",{"data-testid":"page-profile",className:"Profile-Container wave-bottom",children:[Object(h.jsx)("div",{className:"Category-Header",children:Object(h.jsx)("h2",{children:"Perfil"})}),a?Object(h.jsx)(O,{}):Object(h.jsxs)("section",{className:"Profile",children:[Object(h.jsx)("div",{className:"Profile-Pic",style:{backgroundColor:"#070b0e"},children:Object(h.jsx)("img",{src:r||A,alt:"User ".concat(n),"data-testid":"profile-image"})}),Object(h.jsxs)("div",{className:"Profile-Informations",children:[Object(h.jsx)("h3",{children:n}),Object(h.jsx)("p",{children:c}),Object(h.jsx)("p",{children:s})]}),Object(h.jsx)(F.b,{to:"/profile/edit",className:"Edit-Profile",children:"Editar perfil"})]})]})]})}}]),a}(n.Component)),Z=(a(51),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n=a.name,c=a.value;e.setState((function(e){var t=e.userInformations;return{userInformations:Object(f.a)(Object(f.a)({},t),{},Object(T.a)({},n,c))}}),(function(){return e.validateNewInfo()}))},e.fetchUser=Object(b.a)(Object(j.a)().mark((function t(){var a;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),t.next=3,g();case 3:a=t.sent,e.setState({userInformations:Object(f.a)({},a),isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e.updateProfileInfo=function(){var t=Object(b.a)(Object(j.a)().mark((function t(a){var n;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state.userInformations,e.setState({isLoading:!0}),t.next=5,S(n);case 5:e.redirectToProfile();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.redirectToProfile=function(){(0,e.props.history.push)("/profile")},e.validateNewInfo=function(){var t=e.state.userInformations,a=Object.values(t).every((function(e){return e.length>0}));e.setState({isSaveButtonDisabled:!a})},e.state={userInformations:{},isLoading:!1,isSaveButtonDisabled:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchUser(),this.validateNewInfo()}},{key:"render",value:function(){var e=this.state,t=e.userInformations,a=e.isLoading,n=e.isSaveButtonDisabled,c=t.name,r=t.email,s=t.description,i=t.image;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(U,{}),Object(h.jsxs)("section",{"data-testid":"page-profile-edit",className:"Profile-Container wave-bottom",children:[Object(h.jsx)("div",{className:"Category-Header",children:Object(h.jsx)("h2",{children:"Editar perfil"})}),a?Object(h.jsx)(O,{}):Object(h.jsxs)("div",{className:"Profile",children:[Object(h.jsx)("div",{className:"Profile-Pic",children:Object(h.jsx)("img",{src:i||A,alt:"User ".concat(c)})}),Object(h.jsxs)("form",{className:"Profile-Edit-Form",children:[Object(h.jsxs)("label",{htmlFor:"edit-name",children:["Nome",Object(h.jsx)("input",{id:"edit-name",name:"name",type:"text",placeholder:"Nome",maxLength:"32",value:c,onChange:this.handleChange,"data-testid":"edit-input-name"})]}),Object(h.jsxs)("label",{htmlFor:"edit-image",children:["Imagem",Object(h.jsx)("input",{id:"edit-image",name:"image",type:"type",placeholder:"URL da imagem",value:i,onChange:this.handleChange,"data-testid":"edit-input-image"})]}),Object(h.jsxs)("label",{htmlFor:"edit-email",children:["Email",Object(h.jsx)("input",{id:"edit-email",name:"email",type:"text",maxLength:"64",placeholder:"usuario@usuario.com",value:r,onChange:this.handleChange,"data-testid":"edit-input-email"})]}),Object(h.jsxs)("label",{htmlFor:"edit-description",children:["Descri\xe7\xe3o",Object(h.jsx)("input",{id:"edit-description",name:"description",type:"text",placeholder:"Sobre mim",maxLength:"120",value:s,onChange:this.handleChange,"data-testid":"edit-input-description"})]}),Object(h.jsx)("button",{type:"button",disabled:n,onClick:this.updateProfileInfo,"data-testid":"edit-button-save",children:"Salvar"})]})]})]})]})}}]),a}(n.Component)),$=Z,ee=(a(52),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)(F.b,{to:"/search","data-testid":"page-not-found",className:"Link-Not-Found",children:Object(h.jsxs)("div",{className:"Not-Found",children:[Object(h.jsx)("h1",{children:"404"}),Object(h.jsxs)("p",{children:["P\xe1gina n\xe3o encontrada.",Object(h.jsx)("br",{}),"Clique em qualquer lugar da tela para voltar ao in\xedcio."]})]})})}}]),a}(n.Component)),te=ee,ae=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/",component:C}),Object(h.jsx)(d.a,{path:"/search",component:D}),Object(h.jsx)(d.a,{path:"/album/:id",component:W}),Object(h.jsx)(d.a,{path:"/favorites",component:X}),Object(h.jsx)(d.a,{exact:!0,path:"/profile",component:Y}),Object(h.jsx)(d.a,{path:"/profile/edit",component:$}),Object(h.jsx)(d.a,{path:"*",component:te})]})}}]),a}(c.a.Component),ne=ae;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F.a,{children:Object(h.jsx)(ne,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.c2059035.chunk.js.map