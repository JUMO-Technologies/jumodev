
/** @odoo-module **/
odoo.define('stock.stock_report_generic', function (require) {
    'use strict';

    var AbstractAction = require('web.AbstractAction');
    const { ComponentWrapper } = require('web.OwlCompatibility');

    const components = {
        ChatterContainer: require('mail/static/src/components/chatter_container/chatter_container.js'),
    };
    var core = require('web.core');

    class JumoChatterContainerWrapperComponent extends ComponentWrapper { }

    const JumoMain = AbstractAction.extend({
        template: 'jumo.widgets.JumoMainPage',
        /**
         * @override {web.AbstractAction}
         * @param {web.ActionManager} parent
         * @param {Object} action
         * @param {Object} [action.context]
         * @param {string} [action.context.active_id]
         * @param {Object} [action.params]
         * @param {string} [action.params.default_active_id]
         * @param {Object} [options={}]
         */
        init(parent, action, options = {}) {
            this._super(...arguments);

            // control panel attributes
            this.action = action;
            this.actionManager = parent;
            this.options = options;
            this._chatterContainerComponent = undefined;
            this._chatterContainerTarget = undefined;

            window.jumoBinding = {
                action,
                parent
            }
        },
        /**
         * @override {web.AbstractAction}
         */
        destroy() {
            // if (this.$buttons) {
            //     this.$buttons.off().remove();
            // }
            this._super(...arguments);
            window.jumoBinding = null
            this._chatterContainerComponent = undefined;
            this.off('o_attachments_changed', this);
            this.off('o_chatter_rendered', this);
            this.off('o_message_posted', this);
            owl.Component.env.bus.off('mail.thread:promptAddFollower-closed', this);
        },
        /**
         * @override {web.AbstractAction}
         */
        on_attach_callback() {
            console.log('Attaching component')
            this._super(...arguments);
            const root = document.createElement('div')
            root.id = 'jumo-app'
            document.querySelector('#jumo-wrapper').appendChild(root)
            this._insertJS()
            this._insertCSS()
            this._makeChatterContainerComponent()
            this._makeChatterContainerTarget()
            this._mountChatterContainerComponent();
        },
        /**
         * @override {web.AbstractAction}
         */
        on_detach_callback() {
            console.log('Removing component')
            //window.removeJumo()
            this._super(...arguments)
        },

        /**
         * @private
         */
        _makeChatterContainerComponent() {
            console.log('[J] _makeChatterContainerComponent')
            const props = this._makeChatterContainerProps();
            console.log(props)
            this._chatterContainerComponent = new JumoChatterContainerWrapperComponent(
                this,
                components.ChatterContainer,
                props
            );
            // Not in custom_events because other modules may remove this listener
            // while attempting to extend them.
            // this.on('o_chatter_rendered', this, ev => this._onChatterRendered(ev));
            // if (props.hasRecordReloadOnMessagePosted) {
            //     this.on('o_message_posted', this, ev => {
            //         this.trigger_up('reload', { keepChanges: true });
            //     });
            // }
            if (props.hasRecordReloadOnAttachmentsChanged) {
                this.on('o_attachments_changed', this, ev => this.trigger_up('reload', { keepChanges: true }));
            }
            if (props.hasRecordReloadOnFollowersUpdate) {
                owl.Component.env.bus.on('mail.thread:promptAddFollower-closed', this, ev => this.trigger_up('reload', { keepChanges: true }));
            }
        },

        /**
         * @private
         * @returns {Object}
         */
        _makeChatterContainerProps() {
            return {
                hasActivities: true,
                hasFollowers: true,
                hasMessageList: true,
                // hasRecordReloadOnMessagePosted: false,
                isAttachmentBoxVisibleInitially: false,
                threadId: this.action.context.partner_id,
                threadModel: 'res.partner',
            };
        },

        /**
         * Create the DOM element that will contain the chatter. This is made in
         * a separate method so it can be overridden (like in mail_enterprise for
         * example).
         *
         * @private
         * @returns {jQuery.Element}
         */
        _makeChatterContainerTarget() {
            const $el = $('#jumo-chatter');
            this._chatterContainerTarget = $el[0];
            return $el;
        },
        /**
         * Mount the chatter
         *
         * Force re-mounting chatter component in DOM. This is necessary
         * because each time `_renderView` is called, it puts old content
         * in a fragment.
         *
         * @private
         */
        async _mountChatterContainerComponent() {
            try {
                await this._chatterContainerComponent.mount(this._chatterContainerTarget);
            } catch (error) {
                if (error.message !== "Mounting operation cancelled") {
                    throw error;
                }
            }
        },
        /**
         * @override
         */
        _renderNode(node) {
            console.log('[J] renderNode')
            if (node.tag === 'div' && node.attrs.class === 'oe_chatter') {
                return this._makeChatterContainerTarget();
            }
            return this._super(...arguments);
        },
        /**
         * Overrides the function to render the chatter once the form view is
         * rendered.
         *
         * @override
         */
        async __renderView() {
            console.log('[J] renderView')
            await this._super(...arguments);
            if (true) {
                if (!this._chatterContainerComponent) {
                    this._makeChatterContainerComponent();
                } else {
                    await this._updateChatterContainerComponent();
                }
                await this._mountChatterContainerComponent();
            }
        },
        /**
         * @private
         */
        async _updateChatterContainerComponent() {
            const props = this._makeChatterContainerProps();
            try {
                await this._chatterContainerComponent.update(props);
            } catch (error) {
                if (error.message !== "Mounting operation cancelled") {
                    throw error;
                }
            }
        },

        _insertCSS() {
            function addFile(name, id) {
                const l = document.createElement('link')
                l.rel = 'stylesheet';
                l.type = 'text/css';
                l.href = `/jumo/static/app/css/${name}`;
                l.id = id
                document.head.appendChild(l)
            }
            if (document.querySelector('#jumo-app-css')) {
                console.log('CSS already injected')
                return
            }
            addFile('chunk-vendors.css', 'jumo-vendors-css')
            addFile('app.css', 'jumo-app-css')
        },

        _insertJS() {
            if (document.querySelector('#jumo-app-js')) {
                console.log('JS already injected')
                window.startJumo()
                return
            }
            console.log('Inserting scripts...')
            const s1 = document.createElement('script')
            s1.src = '/jumo/static/app/js/chunk-vendors.js'
            s1.id = 'jumo-vendors-js'
            s1.onload = () => {
                const s2 = document.createElement('script')
                s2.src = '/jumo/static/app/js/app.js'
                s2.id = 'jumo-app-js'
                document.body.appendChild(s2)
            }
            document.body.appendChild(s1)
        }
    });
    core.action_registry.add('jumo.widgets.main', JumoMain);
});
