# -*- coding: utf-8 -*-
{
    'name': "jumo",

    'depends': ['base'],
    'installable': True,
    'application': True,
    'data': [
        'views/views.xml',
        'views/templates.xml'
    ],
    'assets': {
        'web.assets_backend': [
            'jumo/static/src/js/jumo.js'
        ],
        'web.assets_qweb': [
            'jumo/static/src/xml/*.xml'
        ],
    }
}
