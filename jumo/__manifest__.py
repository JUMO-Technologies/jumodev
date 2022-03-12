# -*- coding: utf-8 -*-
{
    'name': "Jumo",

    'depends': ['base', 'crm', 'base_setup'],
    'installable': True,
    'application': True,
    'data': [
        'views/widget_templates.xml',
        'views/views.xml',
        'views/templates.xml',
        'views/settings.xml'
    ],
    'version': '14.0.0',
    'qweb': [
            'static/src/xml/jumo_main.xml',
    ],
}
