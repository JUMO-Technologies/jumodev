# -*- coding: utf-8 -*-
{
    'name': "Jumo",

    'depends': ['base', 'crm', 'base_setup'],
    'installable': True,
    'application': True,
    'data': [
        'views/views.xml',
        'views/templates.xml',
        'views/settings.xml'
    ],
    'version': '15.0.0',
    'assets': {
        'web.assets_backend': [
            'jumo/static/src/js/jumo.js'
        ],
        'web.assets_qweb': [
            'jumo/static/src/xml/*.xml'
        ],
    }
}
