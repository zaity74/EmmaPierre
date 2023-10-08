# Part 1 : JSX: 
> Avec React les variables/Les fonctions... peuvent contenir du html.
le html peut retourner les valeurs d'une variable/une expression Js/une fonction, tout ceci entre {}
Tels que : <html tags => {function/variable/object element/} />
> Les attributs d'une balise html peuvent utiliser les valuers d'une fonction/variables/object; également entre {}
Tels que : <html attributs:"{function/variables/object...}" /> 

===========================================================================
* Exemple : 
    // dictionnary
    const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    url : 'https:www.asdasda.fr'
    };

    function formatUserName(user){
        return user.firstName + '' + user.lastName
    }

    // JSX - RETURN JS FUNCTION
    function getUser(user){
        if (users){
            return {
                <h1>Hi,{formatUserName(user)}</h1>
                <a href="{user.url}"/>
            }
        }else{
            return False
        }
    }

# Part 2 : Les composants fonctions et classes :
Les composants sont des objets réutilisable à n'importe qu'elle endroit du code. 
Les composants sont commes les instances de classes en JAVA OU PYTHON.
> Les fonctions composants 
Les fonctions composants, sont constitué d'un argument (props), qui fait référence à l'objet function qui retourne ainsi les données/attributs définis pour la fonction. 
Tels que : 
function Welcome(props) {
// props => Fait référence à l'objet function Welcome
// props.name => name est une donnée de l'objet Welcome.
return <h1>Bonjour, {props.name}</h1>;
}
> Réutiliser un composant 
- On peut réutiliser les composants n'importe ou dans le code, au seins d'une
[variable,function_composant,classes_composant...]
Lorsqu'on réutilise un composant, on fait appelle à son objet au sein d'une balise puis on modifie une de ses donnée. 
===========================================================================
* Exemple : 
// Je réutilise la fonction composant Welcome dans une variable et je change une de ses données name
const user = <Welcome name="Sara" />
// Je réutilise la fonction composant Welcome dans un autre composant App 
function App(props){
    return(
        <Welcome name="Henry" />
        <Welcome name="David" />
    )
}
===========================================================================
> Affecter différents type de données dans mon composant
L'argument props qui fait référence à l'objet function => function Welcome(props)
peut avoir différentes types de données qu'on nomme props également [objets,text,array...]
tels que : 
    function Welcome(props){
        return(
            // Ici props a pour donnée user qui est objet et qui pour attribut name et link
            <h1>Bonjour,{props.user.name}</h1>
            <a>Voici mon lien, {props.user.link}</A>
        )
    }
> Scinder un composant en plusieurs petits composants
Pour alléger le code, il est important parfois de scinder ses composants en plus petits composant, notamment pour certains éléments qui sont réutilisable, afin de ne pas altérer le chargement et la vitesse du site. 
===========================================================================
* Exemple : 
$
    // Ici le composant Comment comporte un élément UserInfo et à l'intérieur un élément Avatar, ceux-ci sont des éléments que l'on peut réutiliser. 
    // On va donc créer des composants indépendant Avatar et UserInfo et les réutiliser dans le composant Comment.
$
-
    function Comment(props) {
        return (
            <div className="Comment">
                <div className="UserInfo">
                    <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                    />
                    <div className="UserInfo-name">
                    {props.author.name}
                    </div>
                </div>
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        );
        }
$
    // On crée un composant Avater, qui va retourner une image avec les données de sa props, qu'on va nommé user.
    // La props user de Avatar a pour donné user.AvatarUrl, user.name
$
-
*   function Avatar(props){
            return(
                <img 
                    src="{props.user.AvatarUrl}"
                    alt="{props.user.name}"
                />
            )
        }
$
    // On introduit le composant Avatar dans un autre composant UserInfo
    // On peut modifier la props user de Avatar, avec les données de la props UserInfo
    // On modifie l'objet user par un autre objet user contenu dans le composant UserInfo
$
*   function UserInfo(props){
        return(
             <div className="UserInfo">
                <Avatar user="props.user" />
                <div className="UserInfo-name">
                {props.user.name}
                </div>
            </div>
        )
    }
$
    // Simplification du composant Comment 
    // Dans l'appel du composant UserInfo, on change son objet props (user) par un autre objet de la props de Comment (author)
    => qui contient author.AvatarUrl et author.name
$
*   function Comment(props){
        return(
                <UserInfo user="props.author" />
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
        )
}


=========================================================================== 

# Part 3 : Rendu des éléments d'un composant :
- De base pour mettre à jour l'interface utilisateur, à chaque fois qu'on crée un composant on utilisait la méthode ReactDom.render(<Composant_name>/element(const/var)/function,document.getElementById('root')), afin d'afficher sur l'interface le rendu du composant crée. 
- Pour permettre à un composant de se mettre à jour indépendemment, il faut lui transférer ['unétatlocal']. 
Pour transférer un état local à un composant on le transform en classe, en lui introduisant une méthode [render()]. 
- Cette méthode render() sera appellé à chaque le mise à jour du composant 
- Ainsi <Composant_name /> qui demeure dans le Noeud DOM principale, via ReactDOM.render() sera mis à jour automatiquement. 
> Créer un composant à l'état local (Classe): 
-  La classe crée est une sous classe de React.Component, on utilise le préfixe [extends] => class Name extends React.Componnent{}
-  On crée une méthode constructeur de classe comme en JAVA, avec comme argument props, pour initialiser les propriétés (props) de la classe. Dans le constructeur on utilise [this.state] pour transformer les propriétés props de la classe dans un état local. => [constructeur(props)]
*   Résumé :
    Quand le composant <Composant_name /> est passé à ReactDOM.render(), React appelle le constructeur de class du composant. Il initialise les champs de classes, soit les props à l'état local.
    React appelle ensuite la méthode render() du composant. C’est comme cela que React découvre ce qu’il faut afficher à l’écran. React met ensuite à jour le DOM pour correspondre à la sortie de la méthode render(). 
===========================================================================
* Exemple : 

    class Bijoux extends React.Componnent{
        // constructor
        constructor(props){
            super(props);
            // Initialiser à l'état local les champs de la classe
            this.state = {
                name : 'frederic',
                count : 1
            }
        }
        render(){
            return(
                <h1>Bonjour,{this.state.name}</h1>
                <Welcome name="Henry" />
                <Welcome name="David" />
            )
        }

    }
===========================================================================    

# Part 4 : Les cycles de vie d'un composant : 
- Ils existent 2 méthodes de cycle de vie d'un composant, [componentDidMount()] et[componentWillUnmount()]. 
- La méthode componentDidMount(), s'éxecute 1 fois et permet d'afficher un statement/rendu juste après avoir afficher le contenu de la méthode render(). 
=> Ainsi DidMount(), s'éxécute juste après render(). 
=> la méthode componentWillUnmount, permet de détruire un élément ou méthode executé dans la méthode componentDidMount, juste avant qu'un composant soit supprimé du Dom, ou lors d'un condition invalide ou d'un événement invalide (onclick...)
===========================================================================
* Exemple : 
    // Ici on crée un evènement click dans la méthode componentDidMount
    // Puis on la détruit grâce componentWillUnmount
$
    class SideMenu extends Component {

        constructor(props) {
            super(props);
            this.state = {
                };
            this.openMenu = this.openMenu.bind(this);
            this.closeMenu = this.closeMenu.bind(this);
        }
        componentDidMount() {
            document.addEventListener("click", this.closeMenu);
        }
        componentWillUnmount() {
            document.removeEventListener("click", this.closeMenu);
        }
        closeMenu(){}

        render(){
            return(
                  <a
                        href      = "javascript:void(0)"
                        className = "closebtn"
                        onClick   = {this.closeMenu}
                    >
                        close
                    </a>
            )
        }
    }
$
===========================================================================

# Part 5 : Modifier une props à l'état locale :
Pour modifier une props à l'état locale, on utilise la méthode setState(), cette méthode permettra d'actualisé à chaque mis à jour du DOM la props. 
Tels que : 
this.setState(function(state){
    return{
        props : 'new_value',
    }
})

# Part 6 : La gestion des événements :
> Bonnes pratique de nommage de fonction évènement
Lorsqu'on appel une fonction depuis un ecoute d'événement (onClick...), celle-ci s'écrivent en camelCase, soit de lowercase à uppercase. 
Tels que: [onclick={this.increaseVolume}]
> Liaisons des méthodes d'événement
En react les méthodes ne sont pas liées à la classe, ainsi lors de l'appel depuis l'écouteur d'événement [onclick={this.nameMethods}], react ne pourra pas lire (this) et retournera undefined. 
Ainsi donc il faut le lier au constructeur de la classe, avec la syntaxe :
- this.nameEventMethods = this.nameEventMethods.bind(this);
===========================================================================
*   Exemple:
    class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState(state => ({
            isToggleOn: !state.isToggleOn
            }));
        }

        render() {
            return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            );
        }
    } 
===========================================================================

# Part 7 : Affichage conditionnel :
- Il est utile parfois d'utiliser des conditions pour afficher certains composants ou d'autres.
- Ainsi on peut en fonction de l'état du composant afficher via une condition d'autres composants ou non.
> Affichage conditionnel avec if et else
* Exemple : 
    Ici nous souhaitons créer un composant LogginControl, qui en fonction de son état isLoggin, affichera soit le composant inclut dans un button (Login) ou (Logout)
    L'état isLoggin du composant LogginControl changera en fonction de l'action click sur le button. 
    Egalement en fonction de l'état du composant nous afficherons un autre composant greeting si l'utilisateur est log ou logout 

    // User or Gust interaction : On crée deux affichage si c'est le user/guest
    function isUser(props){
        return <h1>Hello User</h1>
    }
    function isGuest(props){
        return <p>You're gust</p>
    }

    // Greeting composant : On crée un composant d'affichage de isUser ou isGuest, si isLoggin est vérifié. 
    class Greetings extends React.Componnent{
        const isLoggin = props.isLoggin
        if (isLoggin){
            return <isUser />
        }
        return <isGuest />
    }

    //Login button action : On crée deux boutons composants qui afficherons login/logout
    function LoginButton(props){
        return (
            <button onclick={props.Onclick}>Connexion</button>
        )
    }
    function LogoutButton(props){
        return (
            <button onclick={props.Onclick}>Déconnexion</button>
        )
    }

    // LoginControl composant : 
    class LoginControl extends React.Component{
        // Constructor 
        constructor(props){
            super(props);
            this.state = {
                isLoggedIn = false; 
            };

        }
        // Methods 
        handleLoggedIn(){
            this.setState(state => ({
                isLoggedIn: true;
            }));
        }

        handleLoggedOut(){
            this.setState(state => ({
                isLoggedIn: false
            }));
        }
        render(){
            // affecte l'état local à une const, puis on effectue la condition
            const isLoggedIn = this.state.isLoggedIn;
            let button; 
            if(isLoggedIn){
                button = <LogginButton onclick={this.handleLoggedOut} />
            }else{
                button = <LogoutButton onclick={this.handleLoggedIn} />
            }
            return(
                <>
                    <div> 
                        {button}
                    </div>
                <>
            )
        }
    }

> Affichage conditionnel avec un opérateur ternaire (condition ? true value : false value)
* render(){
    const isLoggedIn = this.state.isLoggedIn;
    return(
        <>
            <div>
                {isLoggedIn 
                    ? <LogginButton onclick={this.handleLoggedOut} />
                    : <LogoutButton onclick={this.handleLoggedIn} />
                }
            </div>
        </>
    )
}

# Part 8 : Liste et clés :
- Lorsqu'on a une list d'élément ou d'objet la méthode element.map((value) => expression), permet d'afficher dans le rendu JSX les éléments d'une liste. 
- Cependant lorsqu'on souhaite afficher le rendu d'une liste avec la méthode map, il est important d'y renseigner "la key" => qui permet d'indéxer les éléments de la liste. 
- Bonne pratique ! Pour indentifier une clé il est préférable d'utiliser l'id des données de la liste, plutôt que d'utiliser l'index direct de l'élément. 
Tels que = 
    key={element.id} au lieu de 
    key={index} => On l'utilise que si les éléments n'ont pas d'Id stable.
* Exemple : 
    function CardItem(props){
        return(
            <div>
                <h3>{props.post.title}</h3>
                <p>{props.post.content}</p>
                <p>{props.post.author}</p>
            </div>
        )
    }

    function ProductItems(props){
        const productItems = props.product.map((product) =>
            <CardItem key={post.id} post={product} />
        )
        const productFilter = props.product.map((product) => 
            <div key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.author}</p>
            </div>
        )

        return(
            <>
                {productItems}
                {productFilter}
            </>
        )
    }

# Part 9 : Les formulaires :
- Pour gérer les valeurs des formulaires (input,select, textarea), on utilise l'état local des composants. 
Ainsi les valeurs par défaut des éléments form sont stockés dans l'état local state, puis peuvent être mis à jour via la méthode onchange, depuis l'argument event.target qui va cibler le contenu de l'élément form. 
* Exemple : 
    constructor(props){
        super(props);
            this.state = {
            value : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState(stateName: event.target.stateName)
    }
    handleSubmit(event){
        alert('voici la valeur de l'input : ',this.state.value)
        event.preventDefault
    }

    render(){
        return(
            // Ici la valeur de l'input es initialiser dans le constructeur qui au départ est égale à ''
            // Au onchange il prend la valeur enregistrer dans le event.target
            <form onchange={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onchange={this.handleChange}  />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        )
    }

