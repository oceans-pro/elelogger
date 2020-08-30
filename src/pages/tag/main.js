require('./_tag.scss')
import VueInstanceUseElButton from '@/pages/tag/button'
import VueInstanceWithSortableList from '@/pages/tag/items'

export default function modifyTagPage() {
  // 体验不佳
  // $('title').html('随笔分类')

  const $upTitle = $('#taglist_title_wrap')
  const $upList = $('#taglist')
  const $main = $('#taglist_main')
  $('#taglist_title_wrap, #taglist').wrapAll('<div id="up-tag-area"></div>')
  const $up = $('#up-tag-area')

  $main.append(`<div id="down-tag-area"></div>`)
  const $down = $('#down-tag-area')
  $down.append($upTitle.HTML())
  $down.append($upList.HTML())
  // --modify
  let newTitle = $down.find('h3')[0].firstChild.nodeValue.replace('标签', '标签（不显示）')
  console.log(newTitle)
  $down.find('h3')[0].firstChild.nodeValue = newTitle

  hide($up, $down)
  $('#taglist_main h3').click(function() {
    window.open('https://i.cnblogs.com/tags')
  })
  $up.find('h3').parent().append('<div id="btn-1"></div>')
  $down.find('h3').parent().append('<div id="btn-2"></div>')

  const vueUp = new VueInstanceWithSortableList('#up-tag-area')
  const vueDown = new VueInstanceWithSortableList('#down-tag-area')
  const vueUpBtn = new VueInstanceUseElButton('#btn-1')
  const vueDownBtn = new VueInstanceUseElButton('#btn-2')
  listenReOrder('#up-tag-area', vueUp, vueUpBtn)
  listenReOrder('#down-tag-area', vueDown, vueDownBtn)

  $main.find('a').attr('target', '_blank')
  $main.find('a').click(function(e) {
    // 防止点击内部a，外面的button也被点击
    e.stopPropagation()
  })

  /**
   * 监听点击事件，统一两个Vue组件的状态
   * @param which el
   * @param that list
   * @param thatBtn button
   */
  function listenReOrder(which, that, thatBtn) {
    $(which).find('.name').click(function() {
      if (that.status === 'nameDown') {
        that.status = 'nameUp'
        thatBtn.status = 'nameUp'
      } else { // 两种清空 原来是nameDown 或者 num 系列
        that.status = 'nameDown'
        thatBtn.status = 'nameDown'
      }
      that.sortList('name')
    })
    $(which).find('.num').click(function() {
      if (that.status === 'numDown') {
        that.status = 'numUp'
        thatBtn.status = 'numUp'
      } else { // 两种清空 原来是numUp 或者 name 系列
        that.status = 'numDown'
        thatBtn.status = 'numDown'
      }
      that.sortList('num')
    })
  }

  function hide($up, $down) {
    $up.find('td a').each(function() {
      if (/^_/.test($(this).text())) {
        $(this).parent().remove()
      }
    })

    $down.find('td a').each(function() {
      if (/^_/.test($(this).text())) {
        const newText = $(this).text().substring(1)
        $(this).text(newText)
      } else {
        $(this).parent().remove()
      }
    })
  }
}
