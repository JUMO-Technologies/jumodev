# -*- coding: utf-8 -*-
{
    'license': "OPL-1",
    'name': "Document Manage",
    'summary': "Manage related document attachments",
    'author': "renjie <i@renjie.me>",
    'website': "https://renjie.me",
    'support': 'i@renjie.me',
    'category': 'Document Management',
    'version': '1.3',
    'price': 0.99,
    'currency': 'EUR',
    'depends': ['document_sidebar'],
    'images': [
        'static/description/main_screenshot.png',
    ],
    'assets': {
        'web.assets_backend': [
            'document_attachment_manage/static/src/js/*.js',
        ],
    },
    'installable': True,
    'auto_install': False,
    'application': True,
}