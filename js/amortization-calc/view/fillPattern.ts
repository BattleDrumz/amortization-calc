// Helper function to fill in pattern variables in localized strings
export function fillPattern( patternProperty: { value: string }, values: Record<string, string | number> ): string {
  let result = patternProperty.value;
  for ( const key in values ) {
    result = result.replace( `{{${key}}}`, String( values[ key ] ) );
  }
  return result;
}
