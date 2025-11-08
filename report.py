global_total_marketcap = global_df['MarketCap_BillionUSD'].sum()
india_total_funding = fund_by_year['AmountUSD'].sum()

india_total_funding_billion = india_total_funding / 1e9

fig = go.Figure(data=[
    go.Bar(
        x=['Global Tech Industry', 'Indian Tech Startups'],
        y=[global_total_marketcap, india_total_funding_billion],
        text=[f"{global_total_marketcap:.1f} Bn USD", f"{india_total_funding_billion:.2f} Bn USD"],
        textposition='auto',
        marker=dict(color=['#1f77b4', '#2ca02c'])
    )
])

fig.update_layout(
    title='🌍 Global vs 🇮🇳 Indian Tech Industry Comparison',
    xaxis_title='Region',
    yaxis_title='Total Valuation / Funding (Billion USD)',
    template='plotly_white',
    title_font=dict(size=22, color='black'),
    width=850,
    height=500
)

fig.show()
