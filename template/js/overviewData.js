Docs.overviewData = {
    'organisation': [
        {
            'name': 'Base',
            'categories': [
                {align: 'lft', items: ['Class System', 'Support']},
                {align: 'mid', items: ['Application Architecture']},
                {align: 'rgt', items: ['DOM & Browser']}
            ]
        },
        {
            'name': 'View',
            'categories': [
                {align: "lft", items: ['Containers & Panels']},
                {align: "mid", items: ['Layouts']},
                {align: "rgt", items: ['Draw']}
            ]
        },
        {
            'name': 'Components',
            'categories': [
                {align: 'lft', items: ['Components','Tree','Toolbar','Menu']},
                {align: "mid", items: ['Form','Form Actions','Grid']},
                {align: "rgt", items: ['Charts','Drag & Drop','Component Utilities']}
            ]
        },
        {
            'name': 'Data',
            'categories': [
                {align: 'lft', items: ['Data Models','Data Readers & Writers']},
                {align: "mid", items: ['Data Proxies']},
                {align: "rgt", items: ['Data Stores','Direct']}
            ]
        },
        {
            'name': 'Utilities',
            'categories': [
                {align: 'lft', items: ['Native Extensions']},
                {align: "mid", items: ['Utility']},
                {align: "rgt", items: ['Events']}
            ]
        }
    ],

    'categories': {
        'Class System': {
            guide: 'class_system',
            classes: [
                'Ext',
                'Ext.Base',
                'Ext.Class',
                'Ext.ClassManager',
                'Ext.Loader',
                'Ext.AbstractPlugin',
                'Ext.PluginManager'
            ]
        },
        'DOM & Browser': {
            guide: 'DOM',
            classes: [
                'Ext.DomQuery',
                'Ext.CompositeElement',
                'Ext.CompositeElementLite',
                'Ext.core.DomHelper',
                'Ext.core.Element',
                'Ext.fx.Anim',
                'Ext.fx.Animator',
                'Ext.fx.Easing',
                'Ext.fx.target.Component',
                'Ext.fx.target.CompositeElement',
                'Ext.fx.target.CompositeElementCSS',
                'Ext.fx.target.CompositeSprite',
                'Ext.fx.target.Element',
                'Ext.fx.target.ElementCSS',
                'Ext.fx.target.Sprite',
                'Ext.fx.target.Target',
                'Ext.Img',
                'Ext.util.Animate',
                'Ext.util.Cookies',
                'Ext.util.CSS',
                'Ext.Ajax',
                'Ext.data.JsonP',
                'Ext.ElementLoader'
            ]
        },
        'Containers & Panels': {
            guide: 'layouts_and_containers',
            classes: [
                'Ext.container.AbstractContainer',
                'Ext.container.Container',
                'Ext.container.ButtonGroup',
                'Ext.container.Viewport',
                'Ext.panel.AbstractPanel',
                'Ext.panel.Panel',
                'Ext.panel.Header',
                'Ext.panel.Tool',
                'Ext.tab.Panel',
                'Ext.tree.Panel',
                'Ext.grid.View',
                'Ext.grid.Panel',
                'Ext.form.Panel'
            ]
        },
        'Layouts': {
            guide: 'layouts_and_containers',
            classes: [
                'Ext.layout.container.Accordion',
                'Ext.layout.container.Absolute',
                'Ext.layout.container.AbstractCard',
                'Ext.layout.container.AbstractContainer',
                'Ext.layout.container.AbstractFit',
                'Ext.layout.container.Anchor',
                'Ext.layout.container.Auto',
                'Ext.layout.container.Border',
                'Ext.layout.container.Box',
                'Ext.layout.container.Card',
                'Ext.layout.container.CheckboxGroup',
                'Ext.layout.container.Column',
                'Ext.layout.container.Fit',
                'Ext.layout.container.HBox',
                'Ext.layout.container.Table',
                'Ext.layout.container.VBox'
            ]
        },
        'Components': {
            guide: 'components',
            classes: [
                'Ext.ComponentQuery',
                'Ext.AbstractComponent',
                'Ext.Component',
                'Ext.LoadMask',
                'Ext.ProgressBar',
                'Ext.button.Button',
                'Ext.button.Cycle',
                'Ext.button.Split',
                'Ext.picker.Color',
                'Ext.flash.Component',
                'Ext.picker.Date',
                'Ext.picker.Time',
                'Ext.slider.Multi',
                'Ext.slider.Single',
                'Ext.slider.Tip',
                'Ext.tab.Bar',
                'Ext.tab.Tab',
                'Ext.tip.QuickTip',
                'Ext.tip.QuickTipManager',
                'Ext.tip.Tip',
                'Ext.tip.ToolTip',
                'Ext.window.MessageBox',
                'Ext.window.Window'
            ]
        },
        'Tree': {
            guide: 'tree',
            classes: [
                'Ext.tree.Panel',
                'Ext.data.Tree',
                'Ext.data.NodeInterface',
                'Ext.data.TreeStore',
                'Ext.tree.View'
            ]
        },
        'Toolbar': {
            classes: [
                'Ext.toolbar.Fill',
                'Ext.toolbar.Item',
                'Ext.toolbar.Paging',
                'Ext.toolbar.Separator',
                'Ext.toolbar.Spacer',
                'Ext.toolbar.TextItem',
                'Ext.toolbar.Toolbar'
            ]
        },
        'Grid': {
            guide: 'grid',
            classes: [
                'Ext.grid.Panel',
                'Ext.grid.column.Column',
                'Ext.grid.column.Action',
                'Ext.grid.column.Boolean',
                'Ext.grid.column.Date',
                'Ext.grid.column.Number',
                'Ext.grid.column.Template',
                'Ext.grid.feature.Chunking',
                'Ext.grid.feature.RowBody',
                'Ext.grid.feature.Summary',
                'Ext.grid.feature.Feature',
                'Ext.grid.feature.Grouping',
                'Ext.grid.feature.GroupingSummary',
                'Ext.grid.RowNumberer',
                'Ext.grid.property.Grid',
                'Ext.grid.property.HeaderContainer',
                'Ext.grid.property.Property',
                'Ext.grid.property.Store',
                'Ext.grid.plugin.CellEditing',
                'Ext.grid.plugin.DragDrop',
                'Ext.grid.plugin.Editing',
                'Ext.grid.plugin.HeaderResizer',
                'Ext.grid.plugin.RowEditing',
                'Ext.view.AbstractView',
                'Ext.view.BoundList',
                'Ext.view.BoundListKeyNav',
                'Ext.view.TableChunker',
                'Ext.view.Table',
                'Ext.view.View'
            ]
        },
        'Menu': {
            classes: [
                'Ext.menu.CheckItem',
                'Ext.menu.ColorPicker',
                'Ext.menu.DatePicker',
                'Ext.menu.Item',
                'Ext.menu.Manager',
                'Ext.menu.Menu',
                'Ext.menu.Separator'
            ]
        },
        'Form': {
            guide: 'forms',
            classes: [
                'Ext.form.Basic',
                'Ext.form.CheckboxGroup',
                'Ext.form.field.Base',
                'Ext.form.field.Checkbox',
                'Ext.form.field.ComboBox',
                'Ext.form.field.Date',
                'Ext.form.field.Display',
                'Ext.form.FieldAncestor',
                'Ext.form.FieldContainer',
                'Ext.form.field.Field',
                'Ext.form.FieldSet',
                'Ext.form.field.File',
                'Ext.form.field.Hidden',
                'Ext.form.field.HtmlEditor',
                'Ext.form.Label',
                'Ext.form.Labelable',
                'Ext.form.field.Number',
                'Ext.form.field.Picker',
                'Ext.form.field.Radio',
                'Ext.form.RadioGroup',
                'Ext.form.field.Spinner',
                'Ext.form.field.Text',
                'Ext.form.field.TextArea',
                'Ext.form.field.Time',
                'Ext.form.field.Trigger',
                'Ext.form.field.VTypes'
            ]
        },
        'Form Actions': {
            classes: [
                'Ext.form.action.Action',
                'Ext.form.action.DirectLoad',
                'Ext.form.action.DirectSubmit',
                'Ext.form.action.Load',
                'Ext.form.action.StandardSubmit',
                'Ext.form.action.Submit'
            ]
        },
        'Component Utilities': {
            classes: [
                'Ext.Action',
                'Ext.ComponentLoader',
                'Ext.ComponentManager',
                'Ext.Editor',
                'Ext.FocusManager',
                'Ext.Layer',
                'Ext.resizer.Handle',
                'Ext.resizer.Resizer',
                'Ext.resizer.ResizeTracker',
                'Ext.resizer.Splitter',
                'Ext.selection.Model',
                'Ext.selection.CheckboxModel',
                'Ext.selection.RowModel',
                'Ext.Shadow',
                'Ext.util.Floating',
                'Ext.WindowManager',
                'Ext.Template',
                'Ext.XTemplate',
                'Ext.ZIndexManager'
            ]
        },
        'Drag & Drop': {
            guide: 'drag_and_drop',
            classes: [
                'Ext.dd.DD',
                'Ext.dd.DDProxy',
                'Ext.dd.DDTarget',
                'Ext.dd.DragDrop',
                'Ext.dd.DragDropManager',
                'Ext.dd.DragSource',
                'Ext.dd.DragTracker',
                'Ext.dd.DragZone',
                'Ext.dd.DropTarget',
                'Ext.dd.DropZone',
                'Ext.dd.Registry',
                'Ext.dd.ScrollManager',
                'Ext.dd.StatusProxy',
                'Ext.panel.Proxy',
                'Ext.tree.ViewDDPlugin',
                'Ext.util.ComponentDragger'
            ]
        },
        'Data Models': {
            guide: 'data',
            classes: [
                'Ext.data.Model',
                'Ext.data.Field',
                'Ext.data.Types',
                'Ext.data.SortTypes',
                'Ext.data.Association',
                'Ext.data.BelongsToAssociation',
                'Ext.data.HasManyAssociation',
                'Ext.data.validations',
                'Ext.data.Errors'
            ]
        },
        'Data Proxies': {
            guide: 'data',
            classes: [
                'Ext.data.proxy.Ajax',
                'Ext.data.proxy.Client',
                'Ext.data.proxy.Direct',
                'Ext.data.proxy.JsonP',
                'Ext.data.proxy.Memory',
                'Ext.data.proxy.Proxy',
                'Ext.data.proxy.Rest',
                'Ext.data.proxy.LocalStorage',
                'Ext.data.proxy.WebStorage',
                'Ext.data.proxy.SessionStorage',
                'Ext.data.proxy.Server',
                'Ext.data.Connection',
                'Ext.data.Operation',
                'Ext.data.Batch',
                'Ext.data.Request',
                'Ext.data.ResultSet'
            ]
        },
        'Data Readers & Writers': {
            guide: 'data',
            classes: [
                'Ext.data.reader.Reader',
                'Ext.data.reader.Array',
                'Ext.data.reader.Json',
                'Ext.data.reader.Xml',
                'Ext.data.writer.Writer',
                'Ext.data.writer.Xml'
            ]
        },
        'Data Stores': {
            guide: 'data',
            classes: [
                'Ext.data.AbstractStore',
                'Ext.data.StoreManager',
                'Ext.data.Store',
                'Ext.data.DirectStore'
            ]
        },
        'Direct': {
            guide: 'direct',
            classes: [
                'Ext.direct.Event',
                'Ext.direct.ExceptionEvent',
                'Ext.direct.JsonProvider',
                'Ext.direct.Manager',
                'Ext.direct.PollingProvider',
                'Ext.direct.Provider',
                'Ext.direct.RemotingEvent',
                'Ext.direct.RemotingProvider',
                'Ext.direct.Transaction'
            ]
        },
        'Application Architecture': {
            guide: 'application_architecture',
            classes: [
                'Ext.app.Application',
                'Ext.app.Controller',
                'Ext.app.EventBus',
                'Ext.ModelManager',
                'Ext.state.CookieProvider',
                'Ext.state.Manager',
                'Ext.state.Provider',
                'Ext.state.Stateful',
                'Ext.util.History'
            ]
        },
        'Draw': {
            classes: [
                'Ext.draw.Color',
                'Ext.draw.Component',
                'Ext.draw.CompositeSprite',
                'Ext.draw.Sprite',
                'Ext.draw.Surface',
                'Ext.draw.engine.Svg',
                'Ext.draw.engine.Vml'
            ]
        },
        'Charts': {
            guide: 'drawing_and_charting',
            classes: [
                'Ext.chart.Chart',
                'Ext.chart.Legend',
                'Ext.chart.Label',
                'Ext.chart.LegendItem',
                'Ext.chart.Mask',
                'Ext.chart.axis.Axis',
                'Ext.chart.axis.Category',
                'Ext.chart.axis.Gauge',
                'Ext.chart.axis.Numeric',
                'Ext.chart.axis.Time',
                'Ext.chart.series.Area',
                'Ext.chart.series.Bar',
                'Ext.chart.series.Cartesian',
                'Ext.chart.series.Column',
                'Ext.chart.series.Gauge',
                'Ext.chart.series.Line',
                'Ext.chart.series.Pie',
                'Ext.chart.series.Radar',
                'Ext.chart.series.Scatter',
                'Ext.chart.series.Series'
            ]
        },
        'Native Extensions': {
            classes: [
                'Ext.Array',
                'Ext.Number',
                'Ext.Object',
                'Ext.String',
                'Ext.JSON',
                'Ext.Date',
                'Ext.Function'
            ]
        },
        'Utility': {
            classes: [
                'Ext.util.Filter',
                'Ext.util.Format',
                'Ext.util.Inflector',
                'Ext.util.KeyMap',
                'Ext.util.KeyNav',
                'Ext.util.Point',
                'Ext.util.Region',
                'Ext.util.TextMetrics',
                'Ext.util.AbstractMixedCollection',
                'Ext.util.MixedCollection',
                'Ext.util.Grouper',
                'Ext.util.HashMap',
                'Ext.util.Sorter',
                'Ext.util.Sortable'
            ]
        },
        'Support': {
            classes: [
                'Ext.is',
                'Ext.env.Browser',
                'Ext.env.FeatureDetector',
                'Ext.env.OS',
                'Ext.supports',
                'Ext.Version'
            ]
        },
        'Events': {
            classes: [
                'Ext.TaskManager',
                'Ext.EventManager',
                'Ext.EventObject',
                'Ext.util.ClickRepeater',
                'Ext.util.DelayedTask',
                'Ext.util.Observable',
                'Ext.util.TaskRunner'
            ]
        }
    }
};

