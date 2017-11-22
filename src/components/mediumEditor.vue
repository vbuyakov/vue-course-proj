<template>
    <div>
        <div ref="textarea"></div>
    </div>
</template>

<script>
  import 'medium-editor/dist/css/medium-editor.css'
  import 'medium-editor/dist/css/themes/default.css'
  import MediumEditor from 'medium-editor/dist/js/medium-editor'

  export default {
    name: 'mediumEditor',
    props: ['value'],
    data: () => ({
      mec: null
    }),
    methods: {
      emitValue: function (event, editable) {
        this.$emit('input', this.mec.getContent(0))
      },
      init: function () {
        this.mec = new MediumEditor(this.$refs.textarea, {
          toolbar: {
            /* These are the default options for the toolbar,
             if nothing is passed this is what is used */
            allowMultiParagraphSelection: true,
            buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
            diffLeft: 0,
            diffTop: -10,
            firstButtonClass: 'medium-editor-button-first',
            lastButtonClass: 'medium-editor-button-last',
            relativeContainer: null,
            standardizeSelectionStart: false,
            static: false,
            /* options which only apply when static is true */
            align: 'center',
            sticky: false,
            updateOnEmptySelection: false
          }
        })
        this.mec.setContent(this.value, 0)
        this.mec.subscribe('editableInput', this.emitValue)
      }
    },
    mounted () {
      this.init()
    },
    watch: {
      value: function (newValue) {
        this.mec.unsubscribe('editableInput', this.emitValue)
        this.mec.setContent(this.value, 0)
        this.mec.subscribe('editableInput', this.emitValue)
      }
    }
  }
</script>