import service from '@/utils/request'

// @Tags CdrSetmeal
// @Summary 创建CdrSetmeal
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CdrSetmeal true "创建CdrSetmeal"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /cdrSetmeal/createCdrSetmeal [post]
export const createCdrSetmeal = (data) => {
  return service({
    url: '/cdrSetmeal/createCdrSetmeal',
    method: 'post',
    data
  })
}

// @Tags CdrSetmeal
// @Summary 删除CdrSetmeal
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CdrSetmeal true "删除CdrSetmeal"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /cdrSetmeal/deleteCdrSetmeal [delete]
export const deleteCdrSetmeal = (data) => {
  return service({
    url: '/cdrSetmeal/deleteCdrSetmeal',
    method: 'delete',
    data
  })
}

// @Tags CdrSetmeal
// @Summary 删除CdrSetmeal
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除CdrSetmeal"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /cdrSetmeal/deleteCdrSetmeal [delete]
export const deleteCdrSetmealByIds = (data) => {
  return service({
    url: '/cdrSetmeal/deleteCdrSetmealByIds',
    method: 'delete',
    data
  })
}

// @Tags CdrSetmeal
// @Summary 更新CdrSetmeal
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CdrSetmeal true "更新CdrSetmeal"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /cdrSetmeal/updateCdrSetmeal [put]
export const updateCdrSetmeal = (data) => {
  return service({
    url: '/cdrSetmeal/updateCdrSetmeal',
    method: 'put',
    data
  })
}

// @Tags CdrSetmeal
// @Summary 用id查询CdrSetmeal
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.CdrSetmeal true "用id查询CdrSetmeal"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /cdrSetmeal/findCdrSetmeal [get]
export const findCdrSetmeal = (params) => {
  return service({
    url: '/cdrSetmeal/findCdrSetmeal',
    method: 'get',
    params
  })
}

// @Tags CdrSetmeal
// @Summary 分页获取CdrSetmeal列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取CdrSetmeal列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /cdrSetmeal/getCdrSetmealList [get]
export const getCdrSetmealList = (params) => {
  return service({
    url: '/cdrSetmeal/getCdrSetmealList',
    method: 'get',
    params
  })
}
