import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu);
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-conent--is-visible");
    }
}

export default MobileMenu;