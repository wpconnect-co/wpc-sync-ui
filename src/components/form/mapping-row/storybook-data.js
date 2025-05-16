const config = {
	post_type: 'post',
	post_type_slug: '',
};
export const defaultMappingOptions = {
	"acf": {
		"options": [
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "acf::group_63f6863b43291.field_64b6a7322f70e.field_64b798b91797a.title",
				"label": "Page options / Repeater (Link > Title)",
				"supported_sources": [
					"airwpsyncProxyRecordLinks|autoNumber",
					"airwpsyncProxyRecordLinks|barcode.text",
					"airwpsyncProxyRecordLinks|count",
					"airwpsyncProxyRecordLinks|createdBy.id",
					"airwpsyncProxyRecordLinks|createdBy.email",
					"airwpsyncProxyRecordLinks|createdBy.name",
					"airwpsyncProxyRecordLinks|currency",
					"airwpsyncProxyRecordLinks|date",
					"airwpsyncProxyRecordLinks|dateTime",
					"airwpsyncProxyRecordLinks|duration",
					"airwpsyncProxyRecordLinks|email",
					"airwpsyncProxyRecordLinks|externalSyncSource",
					"airwpsyncProxyRecordLinks|lastModifiedBy.id",
					"airwpsyncProxyRecordLinks|lastModifiedBy.email",
					"airwpsyncProxyRecordLinks|lastModifiedBy.name",
					"airwpsyncProxyRecordLinks|lastModifiedTime",
					"airwpsyncProxyRecordLinks|multipleCollaborators.id",
					"airwpsyncProxyRecordLinks|multipleCollaborators.email",
					"airwpsyncProxyRecordLinks|multipleCollaborators.name",
					"airwpsyncProxyRecordLinks|multipleRecordLinks",
					"airwpsyncProxyRecordLinks|multipleSelects",
					"airwpsyncProxyRecordLinks|multilineText",
					"airwpsyncProxyRecordLinks|number",
					"airwpsyncProxyRecordLinks|percent",
					"airwpsyncProxyRecordLinks|phoneNumber",
					"airwpsyncProxyRecordLinks|rating",
					"airwpsyncProxyRecordLinks|richText",
					"airwpsyncProxyRecordLinks|rollup",
					"airwpsyncProxyRecordLinks|singleCollaborator.id",
					"airwpsyncProxyRecordLinks|singleCollaborator.email",
					"airwpsyncProxyRecordLinks|singleCollaborator.name",
					"airwpsyncProxyRecordLinks|singleLineText",
					"airwpsyncProxyRecordLinks|singleSelect",
					"airwpsyncProxyRecordLinks|url"
				],
				"acf_type": "repeater.field_64b798b91797a.title",
				"acf_field": {
					"ID": 372,
					"key": "field_64b6a7322f70e.field_64b798b91797a.title",
					"label": "Repeater (Link > Title)",
					"name": "irepeat",
					"prefix": "acf",
					"type": "repeater.field_64b798b91797a.title",
					"value": null,
					"menu_order": 0,
					"instructions": "",
					"required": 0,
					"id": "",
					"class": "",
					"conditional_logic": 0,
					"parent": 111,
					"wrapper": {
						"width": "",
						"class": "",
						"id": ""
					},
					"collapsed": "",
					"min": 0,
					"max": 0,
					"layout": "table",
					"button_label": "",
					"_name": "irepeat",
					"_valid": 1,
					"sub_fields": [
						{
							"ID": 451,
							"key": "field_64b798b91797a",
							"label": "Link",
							"name": "link",
							"prefix": "acf",
							"type": "link",
							"value": null,
							"menu_order": 0,
							"instructions": "",
							"required": 0,
							"id": "",
							"class": "",
							"conditional_logic": 0,
							"parent": 372,
							"wrapper": {
								"width": "",
								"class": "",
								"id": ""
							},
							"return_format": "array",
							"_name": "link",
							"_valid": 1
						},
						{
							"ID": 457,
							"key": "field_64b7cf7e0f12b",
							"label": "Text",
							"name": "text",
							"prefix": "acf",
							"type": "text",
							"value": null,
							"menu_order": 1,
							"instructions": "",
							"required": 0,
							"id": "",
							"class": "",
							"conditional_logic": 0,
							"parent": 372,
							"wrapper": {
								"width": "",
								"class": "",
								"id": ""
							},
							"default_value": "",
							"placeholder": "",
							"prepend": "",
							"append": "",
							"maxlength": "",
							"_name": "text",
							"_valid": 1
						}
					],
					"group": {
						"ID": 111,
						"key": "group_63f6863b43291",
						"title": "Page options",
						"fields": [],
						"location": [
							[
								{
									"param": "post_type",
									"operator": "==",
									"value": "page"
								}
							]
						],
						"menu_order": 0,
						"position": "normal",
						"style": "default",
						"label_placement": "top",
						"instruction_placement": "label",
						"hide_on_screen": "",
						"active": true,
						"description": "",
						"show_in_rest": 0,
						"_valid": true
					}
				}
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "acf::group_63f6863b43291.field_64b6a7322f70e.field_64b798b91797a.url",
				"label": "Page options / Repeater (Link > URL)",
				"supported_sources": [
					"airwpsyncProxyRecordLinks|url"
				],
				"acf_type": "repeater.field_64b798b91797a.url",
				"acf_field": {
					"ID": 372,
					"key": "field_64b6a7322f70e.field_64b798b91797a.url",
					"label": "Repeater (Link > URL)",
					"name": "irepeat",
					"prefix": "acf",
					"type": "repeater.field_64b798b91797a.url",
					"value": null,
					"menu_order": 0,
					"instructions": "",
					"required": 0,
					"id": "",
					"class": "",
					"conditional_logic": 0,
					"parent": 111,
					"wrapper": {
						"width": "",
						"class": "",
						"id": ""
					},
					"collapsed": "",
					"min": 0,
					"max": 0,
					"layout": "table",
					"button_label": "",
					"_name": "irepeat",
					"_valid": 1,
					"sub_fields": [
						{
							"ID": 451,
							"key": "field_64b798b91797a",
							"label": "Link",
							"name": "link",
							"prefix": "acf",
							"type": "link",
							"value": null,
							"menu_order": 0,
							"instructions": "",
							"required": 0,
							"id": "",
							"class": "",
							"conditional_logic": 0,
							"parent": 372,
							"wrapper": {
								"width": "",
								"class": "",
								"id": ""
							},
							"return_format": "array",
							"_name": "link",
							"_valid": 1
						},
						{
							"ID": 457,
							"key": "field_64b7cf7e0f12b",
							"label": "Text",
							"name": "text",
							"prefix": "acf",
							"type": "text",
							"value": null,
							"menu_order": 1,
							"instructions": "",
							"required": 0,
							"id": "",
							"class": "",
							"conditional_logic": 0,
							"parent": 372,
							"wrapper": {
								"width": "",
								"class": "",
								"id": ""
							},
							"default_value": "",
							"placeholder": "",
							"prepend": "",
							"append": "",
							"maxlength": "",
							"_name": "text",
							"_valid": 1
						}
					],
					"group": {
						"ID": 111,
						"key": "group_63f6863b43291",
						"title": "Page options",
						"fields": [],
						"location": [
							[
								{
									"param": "post_type",
									"operator": "==",
									"value": "page"
								}
							]
						],
						"menu_order": 0,
						"position": "normal",
						"style": "default",
						"label_placement": "top",
						"instruction_placement": "label",
						"hide_on_screen": "",
						"active": true,
						"description": "",
						"show_in_rest": 0,
						"_valid": true
					}
				}
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "acf::group_63f6863b43291.field_64b6a7322f70e.field_64b7cf7e0f12b",
				"label": "Page options / Repeater (Text)",
				"supported_sources": [
					"airwpsyncProxyRecordLinks|autoNumber",
					"airwpsyncProxyRecordLinks|barcode.text",
					"airwpsyncProxyRecordLinks|count",
					"airwpsyncProxyRecordLinks|createdBy.id",
					"airwpsyncProxyRecordLinks|createdBy.email",
					"airwpsyncProxyRecordLinks|createdBy.name",
					"airwpsyncProxyRecordLinks|currency",
					"airwpsyncProxyRecordLinks|date",
					"airwpsyncProxyRecordLinks|dateTime",
					"airwpsyncProxyRecordLinks|duration",
					"airwpsyncProxyRecordLinks|email",
					"airwpsyncProxyRecordLinks|externalSyncSource",
					"airwpsyncProxyRecordLinks|lastModifiedBy.id",
					"airwpsyncProxyRecordLinks|lastModifiedBy.email",
					"airwpsyncProxyRecordLinks|lastModifiedBy.name",
					"airwpsyncProxyRecordLinks|lastModifiedTime",
					"airwpsyncProxyRecordLinks|multipleCollaborators.id",
					"airwpsyncProxyRecordLinks|multipleCollaborators.email",
					"airwpsyncProxyRecordLinks|multipleCollaborators.name",
					"airwpsyncProxyRecordLinks|multipleRecordLinks",
					"airwpsyncProxyRecordLinks|multipleSelects",
					"airwpsyncProxyRecordLinks|multilineText",
					"airwpsyncProxyRecordLinks|number",
					"airwpsyncProxyRecordLinks|percent",
					"airwpsyncProxyRecordLinks|phoneNumber",
					"airwpsyncProxyRecordLinks|rating",
					"airwpsyncProxyRecordLinks|richText",
					"airwpsyncProxyRecordLinks|rollup",
					"airwpsyncProxyRecordLinks|singleCollaborator.id",
					"airwpsyncProxyRecordLinks|singleCollaborator.email",
					"airwpsyncProxyRecordLinks|singleCollaborator.name",
					"airwpsyncProxyRecordLinks|singleLineText",
					"airwpsyncProxyRecordLinks|singleSelect",
					"airwpsyncProxyRecordLinks|url"
				],
				"acf_type": "repeater.field_64b7cf7e0f12b",
				"acf_field": {
					"ID": 372,
					"key": "field_64b6a7322f70e.field_64b7cf7e0f12b",
					"label": "Repeater (Text)",
					"name": "irepeat",
					"prefix": "acf",
					"type": "repeater.field_64b7cf7e0f12b",
					"value": null,
					"menu_order": 0,
					"instructions": "",
					"required": 0,
					"id": "",
					"class": "",
					"conditional_logic": 0,
					"parent": 111,
					"wrapper": {
						"width": "",
						"class": "",
						"id": ""
					},
					"collapsed": "",
					"min": 0,
					"max": 0,
					"layout": "table",
					"button_label": "",
					"_name": "irepeat",
					"_valid": 1,
					"sub_fields": [
						{
							"ID": 451,
							"key": "field_64b798b91797a",
							"label": "Link",
							"name": "link",
							"prefix": "acf",
							"type": "link",
							"value": null,
							"menu_order": 0,
							"instructions": "",
							"required": 0,
							"id": "",
							"class": "",
							"conditional_logic": 0,
							"parent": 372,
							"wrapper": {
								"width": "",
								"class": "",
								"id": ""
							},
							"return_format": "array",
							"_name": "link",
							"_valid": 1
						},
						{
							"ID": 457,
							"key": "field_64b7cf7e0f12b",
							"label": "Text",
							"name": "text",
							"prefix": "acf",
							"type": "text",
							"value": null,
							"menu_order": 1,
							"instructions": "",
							"required": 0,
							"id": "",
							"class": "",
							"conditional_logic": 0,
							"parent": 372,
							"wrapper": {
								"width": "",
								"class": "",
								"id": ""
							},
							"default_value": "",
							"placeholder": "",
							"prepend": "",
							"append": "",
							"maxlength": "",
							"_name": "text",
							"_valid": 1
						}
					],
					"group": {
						"ID": 111,
						"key": "group_63f6863b43291",
						"title": "Page options",
						"fields": [],
						"location": [
							[
								{
									"param": "post_type",
									"operator": "==",
									"value": "page"
								}
							]
						],
						"menu_order": 0,
						"position": "normal",
						"style": "default",
						"label_placement": "top",
						"instruction_placement": "label",
						"hide_on_screen": "",
						"active": true,
						"description": "",
						"show_in_rest": 0,
						"_valid": true
					}
				}
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "acf::group_63f6863b43291.field_64b7cf7c0f12a",
				"label": "Page options / Post object",
				"supported_sources": [
					"singleLineText",
					"singleSelect",
					"airwpsyncProxyRecordLinks|singleLineText",
					"airwpsyncProxyRecordLinks|singleSelect",
					"multipleSelects"
				],
				"acf_type": "post_object",
				"acf_field": {
					"ID": 458,
					"key": "field_64b7cf7c0f12a",
					"label": "Post object",
					"name": "post_object",
					"prefix": "acf",
					"type": "post_object",
					"value": null,
					"menu_order": 1,
					"instructions": "",
					"required": 0,
					"id": "",
					"class": "",
					"conditional_logic": 0,
					"parent": 111,
					"wrapper": {
						"width": "",
						"class": "",
						"id": ""
					},
					"post_type": "",
					"taxonomy": "",
					"allow_null": 0,
					"multiple": 1,
					"return_format": "object",
					"ui": 1,
					"_name": "post_object",
					"_valid": 1,
					"group": {
						"ID": 111,
						"key": "group_63f6863b43291",
						"title": "Page options",
						"fields": [],
						"location": [
							[
								{
									"param": "post_type",
									"operator": "==",
									"value": "page"
								}
							]
						],
						"menu_order": 0,
						"position": "normal",
						"style": "default",
						"label_placement": "top",
						"instruction_placement": "label",
						"hide_on_screen": "",
						"active": true,
						"description": "",
						"show_in_rest": 0,
						"_valid": true
					}
				}
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "acf::group_63f6863b43291.field_64b7d13eeb5b3",
				"label": "Page options / Relationship",
				"supported_sources": [
					"singleLineText",
					"singleSelect"
				],
				"acf_type": "relationship",
				"acf_field": {
					"ID": 461,
					"key": "field_64b7d13eeb5b3",
					"label": "Relationship",
					"name": "relationship",
					"prefix": "acf",
					"type": "relationship",
					"value": null,
					"menu_order": 2,
					"instructions": "",
					"required": 0,
					"id": "",
					"class": "",
					"conditional_logic": 0,
					"parent": 111,
					"wrapper": {
						"width": "",
						"class": "",
						"id": ""
					},
					"post_type": "",
					"taxonomy": "",
					"filters": [
						"search",
						"post_type",
						"taxonomy"
					],
					"elements": "",
					"min": "",
					"max": 1,
					"return_format": "object",
					"_name": "relationship",
					"_valid": 1,
					"group": {
						"ID": 111,
						"key": "group_63f6863b43291",
						"title": "Page options",
						"fields": [],
						"location": [
							[
								{
									"param": "post_type",
									"operator": "==",
									"value": "page"
								}
							]
						],
						"menu_order": 0,
						"position": "normal",
						"style": "default",
						"label_placement": "top",
						"instruction_placement": "label",
						"hide_on_screen": "",
						"active": true,
						"description": "",
						"show_in_rest": 0,
						"_valid": true
					}
				}
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "acf::group_63ff366801513.field_63ff367327fb8",
				"label": "Post options / Post image",
				"supported_sources": [
					"multipleAttachments"
				],
				"acf_type": "image",
				"acf_field": {
					"ID": 137,
					"key": "field_63ff367327fb8",
					"label": "Post image",
					"name": "post_image",
					"prefix": "acf",
					"type": "image",
					"value": null,
					"menu_order": 0,
					"instructions": "",
					"required": 0,
					"id": "",
					"class": "",
					"conditional_logic": 0,
					"parent": 136,
					"wrapper": {
						"width": "",
						"class": "",
						"id": ""
					},
					"return_format": "array",
					"preview_size": "medium",
					"library": "all",
					"min_width": "",
					"min_height": "",
					"min_size": "",
					"max_width": "",
					"max_height": "",
					"max_size": "",
					"mime_types": "",
					"_name": "post_image",
					"_valid": 1,
					"group": {
						"ID": 136,
						"key": "group_63ff366801513",
						"title": "Post options",
						"fields": [],
						"location": [
							[
								{
									"param": "post_type",
									"operator": "==",
									"value": "post"
								}
							]
						],
						"menu_order": 0,
						"position": "normal",
						"style": "default",
						"label_placement": "top",
						"instruction_placement": "label",
						"hide_on_screen": "",
						"active": true,
						"description": "",
						"show_in_rest": 0,
						"_valid": true
					}
				}
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "acf::group_63ff366801513.field_640067eb499d8.title",
				"label": "Post options / Post Link (Title)",
				"supported_sources": [
					"autoNumber",
					"barcode.text",
					"count",
					"createdBy.id",
					"createdBy.email",
					"createdBy.name",
					"currency",
					"date",
					"dateTime",
					"duration",
					"email",
					"externalSyncSource",
					"lastModifiedBy.id",
					"lastModifiedBy.email",
					"lastModifiedBy.name",
					"lastModifiedTime",
					"multipleCollaborators.id",
					"multipleCollaborators.email",
					"multipleCollaborators.name",
					"multipleRecordLinks",
					"multipleSelects",
					"multilineText",
					"number",
					"percent",
					"phoneNumber",
					"rating",
					"richText",
					"rollup",
					"singleCollaborator.id",
					"singleCollaborator.email",
					"singleCollaborator.name",
					"singleLineText",
					"singleSelect",
					"url"
				],
				"acf_type": "link.title",
				"acf_field": {
					"ID": 138,
					"key": "field_640067eb499d8.title",
					"label": "Post Link (Title)",
					"name": "post_link",
					"prefix": "acf",
					"type": "link.title",
					"value": null,
					"menu_order": 1,
					"instructions": "",
					"required": 0,
					"id": "",
					"class": "",
					"conditional_logic": 0,
					"parent": 136,
					"wrapper": {
						"width": "",
						"class": "",
						"id": ""
					},
					"return_format": "array",
					"_name": "post_link",
					"_valid": 1,
					"group": {
						"ID": 136,
						"key": "group_63ff366801513",
						"title": "Post options",
						"fields": [],
						"location": [
							[
								{
									"param": "post_type",
									"operator": "==",
									"value": "post"
								}
							]
						],
						"menu_order": 0,
						"position": "normal",
						"style": "default",
						"label_placement": "top",
						"instruction_placement": "label",
						"hide_on_screen": "",
						"active": true,
						"description": "",
						"show_in_rest": 0,
						"_valid": true
					}
				}
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "acf::group_63ff366801513.field_640067eb499d8.url",
				"label": "Post options / Post Link (URL)",
				"supported_sources": [
					"url"
				],
				"acf_type": "link.url",
				"acf_field": {
					"ID": 138,
					"key": "field_640067eb499d8.url",
					"label": "Post Link (URL)",
					"name": "post_link",
					"prefix": "acf",
					"type": "link.url",
					"value": null,
					"menu_order": 1,
					"instructions": "",
					"required": 0,
					"id": "",
					"class": "",
					"conditional_logic": 0,
					"parent": 136,
					"wrapper": {
						"width": "",
						"class": "",
						"id": ""
					},
					"return_format": "array",
					"_name": "post_link",
					"_valid": 1,
					"group": {
						"ID": 136,
						"key": "group_63ff366801513",
						"title": "Post options",
						"fields": [],
						"location": [
							[
								{
									"param": "post_type",
									"operator": "==",
									"value": "post"
								}
							]
						],
						"menu_order": 0,
						"position": "normal",
						"style": "default",
						"label_placement": "top",
						"instruction_placement": "label",
						"hide_on_screen": "",
						"active": true,
						"description": "",
						"show_in_rest": 0,
						"_valid": true
					}
				}
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "acf::group_63ff366801513.field_64b79302d755f.field_64b79311d7560",
				"label": "Post options / Post Repeater (Post repeater text)",
				"supported_sources": [
					"airwpsyncProxyRecordLinks|autoNumber",
					"airwpsyncProxyRecordLinks|barcode.text",
					"airwpsyncProxyRecordLinks|count",
					"airwpsyncProxyRecordLinks|createdBy.id",
					"airwpsyncProxyRecordLinks|createdBy.email",
					"airwpsyncProxyRecordLinks|createdBy.name",
					"airwpsyncProxyRecordLinks|currency",
					"airwpsyncProxyRecordLinks|date",
					"airwpsyncProxyRecordLinks|dateTime",
					"airwpsyncProxyRecordLinks|duration",
					"airwpsyncProxyRecordLinks|email",
					"airwpsyncProxyRecordLinks|externalSyncSource",
					"airwpsyncProxyRecordLinks|lastModifiedBy.id",
					"airwpsyncProxyRecordLinks|lastModifiedBy.email",
					"airwpsyncProxyRecordLinks|lastModifiedBy.name",
					"airwpsyncProxyRecordLinks|lastModifiedTime",
					"airwpsyncProxyRecordLinks|multipleCollaborators.id",
					"airwpsyncProxyRecordLinks|multipleCollaborators.email",
					"airwpsyncProxyRecordLinks|multipleCollaborators.name",
					"airwpsyncProxyRecordLinks|multipleRecordLinks",
					"airwpsyncProxyRecordLinks|multipleSelects",
					"airwpsyncProxyRecordLinks|multilineText",
					"airwpsyncProxyRecordLinks|number",
					"airwpsyncProxyRecordLinks|percent",
					"airwpsyncProxyRecordLinks|phoneNumber",
					"airwpsyncProxyRecordLinks|rating",
					"airwpsyncProxyRecordLinks|richText",
					"airwpsyncProxyRecordLinks|rollup",
					"airwpsyncProxyRecordLinks|singleCollaborator.id",
					"airwpsyncProxyRecordLinks|singleCollaborator.email",
					"airwpsyncProxyRecordLinks|singleCollaborator.name",
					"airwpsyncProxyRecordLinks|singleLineText",
					"airwpsyncProxyRecordLinks|singleSelect",
					"airwpsyncProxyRecordLinks|url"
				],
				"acf_type": "repeater.field_64b79311d7560",
				"acf_field": {
					"ID": 444,
					"key": "field_64b79302d755f.field_64b79311d7560",
					"label": "Post Repeater (Post repeater text)",
					"name": "post_repeater",
					"prefix": "acf",
					"type": "repeater.field_64b79311d7560",
					"value": null,
					"menu_order": 2,
					"instructions": "",
					"required": 0,
					"id": "",
					"class": "",
					"conditional_logic": 0,
					"parent": 136,
					"wrapper": {
						"width": "",
						"class": "",
						"id": ""
					},
					"collapsed": "",
					"min": 0,
					"max": 0,
					"layout": "table",
					"button_label": "",
					"_name": "post_repeater",
					"_valid": 1,
					"sub_fields": [
						{
							"ID": 445,
							"key": "field_64b79311d7560",
							"label": "Post repeater text",
							"name": "post_repeater_text",
							"prefix": "acf",
							"type": "text",
							"value": null,
							"menu_order": 0,
							"instructions": "",
							"required": 0,
							"id": "",
							"class": "",
							"conditional_logic": 0,
							"parent": 444,
							"wrapper": {
								"width": "",
								"class": "",
								"id": ""
							},
							"default_value": "",
							"placeholder": "",
							"prepend": "",
							"append": "",
							"maxlength": "",
							"_name": "post_repeater_text",
							"_valid": 1
						}
					],
					"group": {
						"ID": 136,
						"key": "group_63ff366801513",
						"title": "Post options",
						"fields": [],
						"location": [
							[
								{
									"param": "post_type",
									"operator": "==",
									"value": "post"
								}
							]
						],
						"menu_order": 0,
						"position": "normal",
						"style": "default",
						"label_placement": "top",
						"instruction_placement": "label",
						"hide_on_screen": "",
						"active": true,
						"description": "",
						"show_in_rest": 0,
						"_valid": true
					}
				}
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "acf::group_63ff366801513.field_64b7d2786baad",
				"label": "Post options / Post relationship",
				"supported_sources": [
					"singleLineText",
					"singleSelect",
					"airwpsyncProxyRecordLinks|singleLineText",
					"airwpsyncProxyRecordLinks|singleSelect",
					"multipleSelects"
				],
				"acf_type": "relationship",
				"acf_field": {
					"ID": 462,
					"key": "field_64b7d2786baad",
					"label": "Post relationship",
					"name": "post_relationship",
					"prefix": "acf",
					"type": "relationship",
					"value": null,
					"menu_order": 3,
					"instructions": "",
					"required": 0,
					"id": "",
					"class": "",
					"conditional_logic": 0,
					"parent": 136,
					"wrapper": {
						"width": "",
						"class": "",
						"id": ""
					},
					"post_type": "",
					"taxonomy": "",
					"filters": [
						"search",
						"post_type",
						"taxonomy"
					],
					"elements": "",
					"min": "",
					"max": "",
					"return_format": "object",
					"_name": "post_relationship",
					"_valid": 1,
					"group": {
						"ID": 136,
						"key": "group_63ff366801513",
						"title": "Post options",
						"fields": [],
						"location": [
							[
								{
									"param": "post_type",
									"operator": "==",
									"value": "post"
								}
							]
						],
						"menu_order": 0,
						"position": "normal",
						"style": "default",
						"label_placement": "top",
						"instruction_placement": "label",
						"hide_on_screen": "",
						"active": true,
						"description": "",
						"show_in_rest": 0,
						"_valid": true
					}
				}
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "acf::group_63ff366801513.field_64bea1ab49deb",
				"label": "Post options / Post Date",
				"supported_sources": [
					"date",
					"dateTime",
					"lastModifiedTime"
				],
				"acf_type": "date_time_picker",
				"acf_field": {
					"ID": 472,
					"key": "field_64bea1ab49deb",
					"label": "Post Date",
					"name": "post_date",
					"prefix": "acf",
					"type": "date_time_picker",
					"value": null,
					"menu_order": 4,
					"instructions": "",
					"required": 0,
					"id": "",
					"class": "",
					"conditional_logic": 0,
					"parent": 136,
					"wrapper": {
						"width": "",
						"class": "",
						"id": ""
					},
					"display_format": "d/m/Y g:i a",
					"return_format": "d/m/Y g:i a",
					"first_day": 1,
					"_name": "post_date",
					"_valid": 1,
					"group": {
						"ID": 136,
						"key": "group_63ff366801513",
						"title": "Post options",
						"fields": [],
						"location": [
							[
								{
									"param": "post_type",
									"operator": "==",
									"value": "post"
								}
							]
						],
						"menu_order": 0,
						"position": "normal",
						"style": "default",
						"label_placement": "top",
						"instruction_placement": "label",
						"hide_on_screen": "",
						"active": true,
						"description": "",
						"show_in_rest": 0,
						"_valid": true
					}
				}
			}
		],
		"label": "ACF"
	},
	"post": {
		"options": [
			{
				"enabled": false,
				"allow_multiple": false,
				"value": "post::dummy_disabled",
				"label": "Dummy disabled",
				"supported_sources": [
					"autoNumber",
					"barcode.type",
					"barcode.text",
					"count",
					"createdBy.id",
					"createdBy.email",
					"createdBy.name",
					"currency",
					"date",
					"dateTime",
					"duration",
					"email",
					"externalSyncSource",
					"lastModifiedBy.id",
					"lastModifiedBy.email",
					"lastModifiedBy.name",
					"lastModifiedTime",
					"multipleCollaborators.id",
					"multipleCollaborators.email",
					"multipleCollaborators.name",
					"multipleRecordLinks",
					"multipleSelects",
					"multilineText",
					"number",
					"percent",
					"phoneNumber",
					"rating",
					"richText",
					"rollup",
					"singleCollaborator.id",
					"singleCollaborator.email",
					"singleCollaborator.name",
					"singleLineText",
					"singleSelect",
					"url"
				]
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "post::post_title",
				"label": "Title",
				"supported_sources": [
					"autoNumber",
					"barcode.type",
					"barcode.text",
					"count",
					"createdBy.id",
					"createdBy.email",
					"createdBy.name",
					"currency",
					"date",
					"dateTime",
					"duration",
					"email",
					"externalSyncSource",
					"lastModifiedBy.id",
					"lastModifiedBy.email",
					"lastModifiedBy.name",
					"lastModifiedTime",
					"multipleCollaborators.id",
					"multipleCollaborators.email",
					"multipleCollaborators.name",
					"multipleRecordLinks",
					"multipleSelects",
					"multilineText",
					"number",
					"percent",
					"phoneNumber",
					"rating",
					"richText",
					"rollup",
					"singleCollaborator.id",
					"singleCollaborator.email",
					"singleCollaborator.name",
					"singleLineText",
					"singleSelect",
					"url"
				]
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "post::post_content",
				"label": "Content",
				"supported_sources": [
					"autoNumber",
					"barcode.type",
					"barcode.text",
					"count",
					"createdBy.id",
					"createdBy.email",
					"createdBy.name",
					"currency",
					"date",
					"dateTime",
					"duration",
					"email",
					"externalSyncSource",
					"lastModifiedBy.id",
					"lastModifiedBy.email",
					"lastModifiedBy.name",
					"lastModifiedTime",
					"multipleCollaborators.id",
					"multipleCollaborators.email",
					"multipleCollaborators.name",
					"multipleRecordLinks",
					"multipleSelects",
					"multilineText",
					"number",
					"percent",
					"phoneNumber",
					"rating",
					"richText",
					"rollup",
					"singleCollaborator.id",
					"singleCollaborator.email",
					"singleCollaborator.name",
					"singleLineText",
					"singleSelect",
					"url"
				]
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "post::post_excerpt",
				"label": "Excerpt",
				"supported_sources": [
					"autoNumber",
					"barcode.type",
					"barcode.text",
					"count",
					"createdBy.id",
					"createdBy.email",
					"createdBy.name",
					"currency",
					"date",
					"dateTime",
					"duration",
					"email",
					"externalSyncSource",
					"lastModifiedBy.id",
					"lastModifiedBy.email",
					"lastModifiedBy.name",
					"lastModifiedTime",
					"multipleCollaborators.id",
					"multipleCollaborators.email",
					"multipleCollaborators.name",
					"multipleRecordLinks",
					"multipleSelects",
					"multilineText",
					"number",
					"percent",
					"phoneNumber",
					"rating",
					"richText",
					"rollup",
					"singleCollaborator.id",
					"singleCollaborator.email",
					"singleCollaborator.name",
					"singleLineText",
					"singleSelect",
					"url"
				]
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "post::post_name",
				"label": "Slug",
				"supported_sources": [
					"autoNumber",
					"barcode.type",
					"barcode.text",
					"count",
					"createdBy.id",
					"createdBy.email",
					"createdBy.name",
					"currency",
					"date",
					"dateTime",
					"duration",
					"email",
					"externalSyncSource",
					"lastModifiedBy.id",
					"lastModifiedBy.email",
					"lastModifiedBy.name",
					"lastModifiedTime",
					"multipleCollaborators.id",
					"multipleCollaborators.email",
					"multipleCollaborators.name",
					"multipleRecordLinks",
					"multipleSelects",
					"multilineText",
					"number",
					"percent",
					"phoneNumber",
					"rating",
					"richText",
					"rollup",
					"singleCollaborator.id",
					"singleCollaborator.email",
					"singleCollaborator.name",
					"singleLineText",
					"singleSelect",
					"url"
				]
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "post::post_author",
				"label": "Author",
				"supported_sources": [
					"autoNumber",
					"barcode.type",
					"barcode.text",
					"count",
					"createdBy.id",
					"createdBy.email",
					"createdBy.name",
					"currency",
					"date",
					"dateTime",
					"duration",
					"email",
					"externalSyncSource",
					"lastModifiedBy.id",
					"lastModifiedBy.email",
					"lastModifiedBy.name",
					"lastModifiedTime",
					"multipleCollaborators.id",
					"multipleCollaborators.email",
					"multipleCollaborators.name",
					"multipleRecordLinks",
					"multipleSelects",
					"multilineText",
					"number",
					"percent",
					"phoneNumber",
					"rating",
					"richText",
					"rollup",
					"singleCollaborator.id",
					"singleCollaborator.email",
					"singleCollaborator.name",
					"singleLineText",
					"singleSelect",
					"url"
				]
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "post::post_status",
				"label": "Status",
				"supported_sources": [
					"autoNumber",
					"barcode.type",
					"barcode.text",
					"count",
					"createdBy.id",
					"createdBy.email",
					"createdBy.name",
					"currency",
					"date",
					"dateTime",
					"duration",
					"email",
					"externalSyncSource",
					"lastModifiedBy.id",
					"lastModifiedBy.email",
					"lastModifiedBy.name",
					"lastModifiedTime",
					"multipleCollaborators.id",
					"multipleCollaborators.email",
					"multipleCollaborators.name",
					"multipleRecordLinks",
					"multipleSelects",
					"multilineText",
					"number",
					"percent",
					"phoneNumber",
					"rating",
					"richText",
					"rollup",
					"singleCollaborator.id",
					"singleCollaborator.email",
					"singleCollaborator.name",
					"singleLineText",
					"singleSelect",
					"url"
				]
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "post::post_date",
				"label": "Publication Date",
				"supported_sources": [
					"date",
					"dateTime",
					"lastModifiedTime"
				]
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "postmeta::_thumbnail_id",
				"label": "Featured Image",
				"supported_sources": [
					"multipleAttachments"
				]
			},
			{
				"enabled": true,
				"allow_multiple": true,
				"value": "postmeta::custom_field",
				"label": "Custom Field...",
				"supported_sources": [
					"autoNumber",
					"barcode.type",
					"barcode.text",
					"checkbox",
					"count",
					"createdBy.id",
					"createdBy.email",
					"createdBy.name",
					"currency",
					"date",
					"dateTime",
					"duration",
					"email",
					"externalSyncSource",
					"lastModifiedBy.id",
					"lastModifiedBy.email",
					"lastModifiedBy.name",
					"lastModifiedTime",
					"multipleAttachments",
					"multipleCollaborators.id",
					"multipleCollaborators.email",
					"multipleCollaborators.name",
					"multipleRecordLinks",
					"multipleSelects",
					"multilineText",
					"number",
					"percent",
					"phoneNumber",
					"rating",
					"richText",
					"rollup",
					"singleCollaborator.id",
					"singleCollaborator.email",
					"singleCollaborator.name",
					"singleLineText",
					"singleSelect",
					"url"
				]
			}
		],
		"label": "Post"
	},
	"taxonomy": {
		"options": [
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "taxonomy::category",
				"label": "Category (category)",
				"form_options": [
					{
						"name": "split_comma_separated_string_into_terms",
						"type": "checkbox",
						"label": "Split comma-separated string into terms"
					}
				],
				"supported_sources": [
					"autoNumber",
					"barcode.type",
					"barcode.text",
					"count",
					"createdBy.id",
					"createdBy.email",
					"createdBy.name",
					"number",
					"currency",
					"date",
					"dateTime",
					"duration",
					"email",
					"externalSyncSource",
					"lastModifiedBy.id",
					"lastModifiedBy.email",
					"lastModifiedBy.name",
					"lastModifiedTime",
					"multipleCollaborators.id",
					"multipleCollaborators.email",
					"multipleCollaborators.name",
					"multipleRecordLinks",
					"multipleSelects",
					"multilineText",
					"percent",
					"phoneNumber",
					"rating",
					"richText",
					"rollup",
					"singleCollaborator.id",
					"singleCollaborator.email",
					"singleCollaborator.name",
					"singleLineText",
					"singleSelect",
					"url"
				]
			},
			{
				"enabled": true,
				"allow_multiple": false,
				"value": "taxonomy::post_tag",
				"label": "Tag (post_tag)",
				"supported_sources": [
					"autoNumber",
					"barcode.type",
					"barcode.text",
					"count",
					"createdBy.id",
					"createdBy.email",
					"createdBy.name",
					"number",
					"currency",
					"date",
					"dateTime",
					"duration",
					"email",
					"externalSyncSource",
					"lastModifiedBy.id",
					"lastModifiedBy.email",
					"lastModifiedBy.name",
					"lastModifiedTime",
					"multipleCollaborators.id",
					"multipleCollaborators.email",
					"multipleCollaborators.name",
					"multipleRecordLinks",
					"multipleSelects",
					"multilineText",
					"percent",
					"phoneNumber",
					"rating",
					"richText",
					"rollup",
					"singleCollaborator.id",
					"singleCollaborator.email",
					"singleCollaborator.name",
					"singleLineText",
					"singleSelect",
					"url"
				]
			}
		],
		"label": "Taxonomies"
	}
};
export const featuresByPostType = {
	"post": {
		"post": [
			"post_name",
			"post_date",
			"post_status",
			"post_title",
			"post_content",
			"post_excerpt",
			"post_author"
		],
		"postmeta": [
			"custom_field",
			"_thumbnail_id"
		],
		"taxonomy": [
			"category",
			"post_tag",
			"post_format"
		]
	},
	"page": {
		"post": [
			"post_name",
			"post_date",
			"post_status",
			"post_title",
			"post_content",
			"post_author"
		],
		"postmeta": [
			"custom_field",
			"_thumbnail_id"
		],
		"taxonomy": []
	},
	"test": {
		"post": [
			"post_name",
			"post_date",
			"post_status",
			"post_title",
			"post_content",
			"post_excerpt",
			"post_author"
		],
		"postmeta": [
			"custom_field",
			"_thumbnail_id"
		],
		"taxonomy": []
	},
	"custom": {
		"post": [
			"post_name",
			"post_date",
			"post_title",
			"post_excerpt",
			"post_content"
		],
		"meta": [
			"_thumbnail_id",
			"custom_field"
		]
	}
};

export const fields = [
	{
		"type": "singleLineText",
		"id": "fldQF3hyuRnmpUP8Z",
		"name": "Name"
	},
	{
		"type": "singleSelect",
		"options": {
			"choices": [
				{
					"id": "selYAX4QcsdofqFkk",
					"name": "Option 1",
					"color": "blueLight2"
				},
				{
					"id": "selIXK45b78QHBBBb",
					"name": "Option 2",
					"color": "blueLight2"
				},
				{
					"id": "sel55nXR2YdC3Zyjo",
					"name": "Option 3",
					"color": "blueLight2"
				}
			]
		},
		"id": "fldPvWJnCYd0KLMUj",
		"name": "Option"
	},
	{
		"type": "multipleSelects",
		"options": {
			"choices": [
				{
					"id": "selMSgRncwSfmyA1l",
					"name": "Choix 1",
					"color": "blueLight2"
				},
				{
					"id": "seludxUim0eST7OL7",
					"name": "Choix 2",
					"color": "blueLight2"
				},
				{
					"id": "selRPF6yw2FZC7Sna",
					"name": "Choix 3",
					"color": "cyanLight2"
				}
			]
		},
		"id": "fldIDnUVBvGY4EIKP",
		"name": "Choix"
	},
	{
		"type": "multilineText",
		"id": "fldbEUpNqCOrqi0i4",
		"name": "Provenance"
	},
	{
		"type": "email",
		"id": "fldPdv2JkfnE3hRt4",
		"name": "Email"
	},
	{
		"type": "multipleAttachments",
		"options": {
			"isReversed": false
		},
		"id": "fldtd7SkyXa8n34tv",
		"name": "Attachments"
	},
	{
		"type": "checkbox",
		"options": {
			"icon": "check",
			"color": "greenBright"
		},
		"id": "fldParyj7anukZnVs",
		"name": "Done"
	},
	{
		"type": "url",
		"id": "fldCEWyxPy9FA5ZiN",
		"name": "URL"
	},
	{
		"type": "date",
		"options": {
			"dateFormat": {
				"name": "european",
				"format": "D/M/YYYY"
			}
		},
		"id": "fldqMqxErVK0reWfn",
		"name": "Date"
	},
	{
		"type": "rating",
		"options": {
			"icon": "star",
			"max": 5,
			"color": "yellowBright"
		},
		"id": "fld3Sdmy6zwbcIdHD",
		"name": "Rating"
	},
	{
		"type": "singleCollaborator.id",
		"id": "fldXSD5IiLvtP4IB6.id",
		"name": "Collaborator (ID)"
	},
	{
		"type": "singleCollaborator.email",
		"id": "fldXSD5IiLvtP4IB6.email",
		"name": "Collaborator (Email)"
	},
	{
		"type": "singleCollaborator.name",
		"id": "fldXSD5IiLvtP4IB6.name",
		"name": "Collaborator (Name)"
	},
	{
		"type": "currency",
		"options": {
			"precision": 3,
			"symbol": "$"
		},
		"id": "fldPIMdD8BKzQLpTZ",
		"name": "Value"
	},
	{
		"type": "number",
		"options": {
			"precision": 0
		},
		"id": "fldOLW4TdBSHQA9ke",
		"name": "Number"
	},
	{
		"type": "phoneNumber",
		"id": "fldp0jU5WJKvwdLHH",
		"name": "Phone"
	},
	{
		"type": "percent",
		"options": {
			"precision": 0
		},
		"id": "fldx0zD1yBBtgTb0o",
		"name": "Percent"
	},
	{
		"type": "duration",
		"options": {
			"durationFormat": "h:mm"
		},
		"id": "fldpLX5MhEX3dDfO0",
		"name": "Duration"
	},
	{
		"type": "dateTime",
		"options": {
			"dateFormat": {
				"name": "us",
				"format": "M/D/YYYY"
			},
			"timeFormat": {
				"name": "12hour",
				"format": "h:mma"
			},
			"timeZone": "client"
		},
		"id": "fldldvqYmaVwfIqCJ",
		"name": "Date 2"
	},
	{
		"type": "duration",
		"options": {
			"durationFormat": "h:mm:ss"
		},
		"id": "fldhtHhc8NWk4Q1Ew",
		"name": "Duration 2"
	}
];

export const isOptionAvailable = function (value) {
	let available = false;

	let postType = config.post_type;
	if (postType === 'custom') {
		const newPostType = config.post_type_slug;
		if (newPostType && featuresByPostType.hasOwnProperty(newPostType)) {
			postType = newPostType;
		}
	}

	const group = value.substring(0, value.indexOf('::'));
	const feature = value.substring(value.indexOf('::') + 2);

	// Check if feature is available for post type
	if (featuresByPostType.hasOwnProperty(postType) && featuresByPostType[postType].hasOwnProperty(group) && Array.isArray(featuresByPostType[postType][group])) {
		available = featuresByPostType[postType][group].indexOf(feature) > -1;
	}

	return available;
};
