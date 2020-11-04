import React from "react"

const PriceTable = () => (
  <table class="price-table">
    <tbody>
      <tr>
        <th class="has-text-right has-text-weight-normal pr-2">¥</th>
        <td>500-1,000 <span class="is-size-7">元/小时</span></td>
      </tr>
      <tr>
        <th class="has-text-right has-text-weight-normal pr-2">¥¥</th>
        <td>1,000-1,500 <span class="is-size-7">元/小时</span></td>
      </tr>
      <tr>
        <th class="has-text-right has-text-weight-normal pr-2">¥¥¥</th>
        <td>1,500-2,500 <span class="is-size-7">元/小时</span></td>
      </tr>
    </tbody>
  </table>
)

export default PriceTable